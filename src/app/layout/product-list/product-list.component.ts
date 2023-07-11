import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {BasicService} from "../../service/basic.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: any;

  constructor(private http: HttpClient,
              private basicService: BasicService) {
  }

  ngOnInit(): void {
    this.http.get<any>(this.basicService.url).subscribe(
      {
        next: ((result: any) => {
          this.products = result;
        })
      }
    );
  }
}
