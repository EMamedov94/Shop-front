import { Injectable } from '@angular/core';
import {BasicService} from "./basic.service";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url: string = this.basicService.url;

  totalItems: any = 0;
  totalSum: any = 0;
  cartItems: any = '';
  added: boolean = false;

  constructor(
    private basicService: BasicService,
    private http: HttpClient,
    private cookie: CookieService
  ) {}

  updateCartItems() {
    this.http
      .get<any>(this.url + '/cart', { withCredentials: true })
      .subscribe({
        next: (res: any) => {
          this.totalItems = res.totalItems;
          this.totalSum = res.totalSum;
          this.cartItems = res.products;
        },
      });
  }

  addProduct(id: any, qty: any) {
    const headers = {
      'Authorization': `Bearer ${this.cookie.get('token')}`,
    };

    this.http
      .post<any>(
        this.url + '/addProduct',
        { id, qty },
        { headers, withCredentials: true }
      )
      .subscribe({
        next: () => {
          this.added = true;
          this.updateCartItems();
        },
      });
  }

  removeProduct(id: any, qty: any) {
    const headers = {
      'Authorization': `Bearer ${this.cookie.get('token')}`,
    };

    this.http
      .post<any>(
        this.url + '/removeProduct',
        { id, qty },
        { headers, withCredentials: true }
      )
      .subscribe({
        next: () => {
          this.updateCartItems();
        },
      });
  }

  deleteProductFromCart(id: any) {
    const headers = {
      'Authorization': `Bearer ${this.cookie.get('token')}`,
    };

    this.http
      .delete(this.url + '/deleteProductFromCart/' + id, {
        headers,
        withCredentials: true,
      })
      .subscribe({
        next: () => {
          this.updateCartItems();
        },
      });
  }
}
