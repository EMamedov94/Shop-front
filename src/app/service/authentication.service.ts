import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BasicService} from "./basic.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient,
              private basicService: BasicService) {}

  get isAuth(): boolean {
    return localStorage.getItem('auth') != null;
  }

  logout() {
    return this.http.post(this.basicService.url + '/logout',{});
  }
}
