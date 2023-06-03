import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FuncService} from "../../service/funcs-service.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };

  constructor(private http: HttpClient,
              private func: FuncService) {
  }

  email: any = "";
  balance: any = 0.0;
  name: any = "";
  photo: any = "";
  description: string = "";
  price: any = 0.0;
  qty: any = 0;


  addProduct(name: any, photo: any, description: any, price: any, qty: any) {
    this.http.post<any>(this.func.url + "/profile/addNewProduct", {
      name,
      photo,
      description,
      price,
      qty
    }, this.httpOptions).subscribe()
  }

  ngOnInit() {
    this.http.get<any>(this.func.url + "/profile/" + localStorage.getItem('userId')).subscribe({
      next: ((res: any) => {
        console.log(res)
        this.email = res.email;
        this.balance = res.balance;
      })
    })
  }
}
