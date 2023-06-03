import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {HeaderComponent} from "../../../layout/header/header.component";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  constructor(private http: HttpClient,
              private activatedRoute: ActivatedRoute,
              private headerComp: HeaderComponent) {
  }

  pathId: any = this.activatedRoute.snapshot.paramMap.get('id');
  id: any;
  name: any;
  description: any;
  price: any;
  seller: any;
  added: boolean = false;

  ngOnInit() {
    this.http.get<any>('/api' + '/product/' + this.pathId).subscribe({
      next: ((res: any) => {
        this.id = res.id;
        this.name = res.name;
        this.description = res.description;
        this.price = res.price;
        this.seller = res.seller;
      })
    });
  }

  addProduct(id: any, qty: any) {
      this.http.post<any>('/api' + '/addProduct', {id, qty}, {
        headers: {
          'Content-Type': 'application/json'
        }, withCredentials: true
      }).subscribe();
    this.http.get('/api' + '/cart').subscribe({
      next: ((res: any) => {
        this.headerComp.cartQty = res.totalItems;
      })
    });
    this.added = true
  }

  removeProduct() {

  }
}
