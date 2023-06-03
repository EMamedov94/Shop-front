import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FuncService} from "../../../service/funcs-service.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private http: HttpClient,
              private service: FuncService) {
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
}
