import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private http: HttpClient) {}

  products: any;

  ngOnInit(): void {
    this.http.get<any>('/api').subscribe(
      {
        next: ((result: any) => {
          this.products = result;
        })
      }
    );
  }
}
