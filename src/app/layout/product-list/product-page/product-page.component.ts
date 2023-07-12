import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {HeaderComponent} from "../../header/header.component";
import {BasicService} from "../../../service/basic.service";
import {CookieService} from "ngx-cookie-service";
import {CartComponent} from "../../header/cart/cart.component";
import {CartService} from "../../../service/cart.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  pathId: string | null = this.activatedRoute.snapshot.paramMap.get('id');
  id: any;
  productInfo: any = '';
  count: any = 0;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private headerComp: HeaderComponent,
    private basicService: BasicService,
    public cartService: CartService
  ) {}

  ngOnInit() {
    this.getProductInfo();
  }

  getProductInfo() {
    const url = `${this.basicService.url}/product/${this.pathId}`;

    this.http.get<any>(url).subscribe({
      next: (res: any) => {
        this.productInfo = res;
        this.id = res.id;
      },
    });
  }

  addProduct(id: any, qty: any) {
    this.cartService.addProduct(id, qty);
  }

  removeProduct(id: any, qty: any) {
    this.cartService.removeProduct(id, qty);
  }
}
