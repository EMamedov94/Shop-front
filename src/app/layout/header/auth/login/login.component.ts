import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FuncService} from "../../../../service/funcs-service.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http: HttpClient) {
  }
  email: string = ""
  password: string = ""

  onLogin(email: string, password: string) {
    this.http.post<any>('/api' + "/login", {email, password}, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe({
      next: ((res: any) => {
        localStorage.setItem("token", res.token)
        localStorage.setItem("userInfo", JSON.stringify(res))
        localStorage.setItem("userId", res.id)
        if (res.role == 'ROLE_ADMIN') {
          localStorage.setItem('admin', res.role);
        }
      })
    });
  }
}
