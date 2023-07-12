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
  constructor(private http: HttpClient,
              private activatedRoute: ActivatedRoute,
              private headerComp: HeaderComponent,
              private basicService: BasicService,
              private cartService: CartService,
              private cookie: CookieService) {
  }

  pathId: any = this.activatedRoute.snapshot.paramMap.get('id');
  id: any;
  productInfo: any = '';
  added: boolean = false;
  count: any = 0;

  ngOnInit() {
    this.http.get<any>(this.basicService.url + '/product/' + this.pathId).subscribe({
      next: ((res: any) => {
        this.productInfo = res;
        this.id = res.id;
      })
    });
  }

  addProduct(id: any, qty: any) {
    this.http.post<any>(this.basicService.url + '/addProduct',
      {id, qty},
      {
        headers: {
          'Authorization': 'Bearer ' + this.cookie.get('token')
        }, withCredentials: true
      }).subscribe({
      next: () => {
        this.added = true;
        this.cartService.updateCartItems();
      }
    });
  }

  removeProduct(id: any, qty: any) {
    this.http.post<any>(this.basicService.url + '/removeProduct',
      {id, qty},
      {
      headers: {
        'Authorization': 'Bearer ' + this.cookie.get('token')
      }, withCredentials: true}).subscribe({
      next: () => {
        this.cartService.updateCartItems();
      }
    });
  }
}
