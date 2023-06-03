import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AuthComponent} from "./auth/auth.component";
import {CookieService} from "ngx-cookie-service";
import {HttpBackend, HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dialog: MatDialog,
              private http: HttpClient) {
  }

  id: any = localStorage.getItem('userId');
  cartQty: any;

  logout() {
    localStorage.clear();
  }

  get logIn(): boolean {
    return (localStorage.getItem('token') != null);
  }

  openAuthMenu() {
    this.dialog.open(AuthComponent, {
      id: 'auth-block',
      width: '500px',
      height: '300px'
    });
  }
}
