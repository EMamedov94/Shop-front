import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BasicService} from "./basic.service";
import {HeaderComponent} from "../layout/header/header.component";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url: string = this.basicService.url;

  email: string = "";
  password: string = "";

  message: any = '';

  constructor(
    private http: HttpClient,
    private basicService: BasicService,
    private cookie: CookieService
  ) {}

  // Is auth

  get isAuth(): boolean {
    return localStorage.getItem('auth') != null;
  }

  // Logout

  logout() {
    return this.http
      .post(
        this.url + '/logout',
        {})
      .subscribe({
        next: () => {
          localStorage.clear();
          this.cookie.delete("token");
        }
      });
  }

  // Login player

  onLogin(email: string, password: string) {
    const body = {
      email,
      password
    };

    this.http
      .post<any>(
        this.url + "/login",
        body)
      .subscribe({
        next: (res: any) => {
          this.cookie.set("token", res.token);
          localStorage.setItem('auth', res.username);
        }
      })
  }

  // Registration new player

  onRegistration(email: string, password: string) {
    const body = {
      email,
      password
    };

    this.http
      .post<any>(
        this.url + "/registrationNewUser",
        body)
      .subscribe({
        next: () => {
          setTimeout(() => {
            console.log('close')
          }, 2000)
        },
        error: err => {
          this.message = err.error;
        }
      })
  }
}
