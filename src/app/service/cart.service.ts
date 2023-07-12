import { Injectable } from '@angular/core';
import {BasicService} from "./basic.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  totalItems: any = 0;
  totalSum: any = 0;
  cartItems: any = '';

  constructor(private basicService: BasicService,
              private http: HttpClient) { }

  updateCartItems() {
    this.http.get<any>(this.basicService.url + '/cart',
      {
        withCredentials: true
      }).subscribe({
      next: (res: any) => {
        this.totalItems = res.totalItems;
        this.totalSum = res.totalSum;
        this.cartItems = res.products;
      }
    })
  }
}
