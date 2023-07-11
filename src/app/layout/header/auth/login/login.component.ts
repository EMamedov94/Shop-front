import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {BasicService} from "../../../../service/basic.service";
import {HeaderComponent} from "../../header.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = ""
  password: string = ""

  constructor(private http: HttpClient,
              private basicService: BasicService,
              private headComp: HeaderComponent,
              private cookie: CookieService) {
  }

  onLogin(email: string, password: string) {
    const body = {
      email, password
    }

    this.http.post<any>(this.basicService.url + "/login", body).subscribe({
      next: ((res: any) => {
        this.cookie.set("token", res.token);
        localStorage.setItem('auth', res.username);
        this.onClose();
      })
    });
  }

  onClose() {
    this.headComp.isVisibleAuthBlock = false;
  }
}
