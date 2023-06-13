import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductPageComponent} from "../../../page/products/product-page/product-page.component";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{
  constructor(private http: HttpClient,
              private productPageComp: ProductPageComponent) {
  }
  cartItems: any;
  totalItems: any;
  totalSum: any;

  ngOnInit(): void {
    this.http.get<any>('/api' + '/cart').subscribe({
      next: ((res: any) => {
        this.cartItems = res.products;
        this.totalItems = res.totalItems;
        this.totalSum = res.totalSum;
      })
    })
  }

  addProduct(id: any, qty: any) {
    this.productPageComp.addProduct(id, qty);
  }

  removeProduct(id: any, qty: any) {
    this.productPageComp.removeProduct(id, qty);
  }

  deleteProductFromCart(id: any) {
    this.http.delete('/api' + '/deleteProductFromCart/' + id).subscribe();
  }
}
