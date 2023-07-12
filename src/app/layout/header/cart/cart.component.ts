import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductPageComponent} from "../../product-list/product-page/product-page.component";
import {BasicService} from "../../../service/basic.service";
import {CartService} from "../../../service/cart.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{
  constructor(
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.updateCartItems();
  }

  deleteProductFromCart(id: any) {
    this.cartService.deleteProductFromCart(id);
  }
}
