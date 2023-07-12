import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {BasicService} from "../../../../service/basic.service";
import {HeaderComponent} from "../../header.component";
import {AuthenticationService} from "../../../../service/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private http: HttpClient,
    private basicService: BasicService,
    private headComp: HeaderComponent,
    public authService: AuthenticationService
  ) {}

  onLogin(email: string, password: string) {
    this.authService.onLogin(email, password);
  }

  onClose() {
    this.headComp.isVisibleAuthBlock = false;
  }
}
