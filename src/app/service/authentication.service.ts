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

  isVisibleAuthBlock: boolean = false;

  constructor(
    private http: HttpClient,
    private basicService: BasicService,
    private cookie: CookieService
  ) {}

  // Is auth

  isAuth(): boolean {
    return this.checkTokenValidity();
  }

  private checkTokenValidity(): boolean {
    const token = this.cookie.get('token');
    return !!token;
  }

  onClose() {
    this.isVisibleAuthBlock = false;
  }

  // Logout

  logout() {
    return this.http
      .post(
        this.url + '/logout',
        {})
      .subscribe({
        next: () => {
          this.cookie.delete("token");
          this.checkTokenValidity();
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
          this.onClose();
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
