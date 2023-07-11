import { Component } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {AuthenticationService} from "../../service/authentication.service";
import {AuthComponent} from "./auth/auth.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private cookie: CookieService,
              public authService: AuthenticationService) {
  }

  cartQty: any;
  isVisibleAuthBlock: boolean = false;

  logout() {
    this.authService.logout().subscribe({
      next: (result: any) => {
        console.log(result);
        localStorage.clear();
        this.cookie.delete("token");
      }
    });
  }

  openAuthMenu() {
    this.isVisibleAuthBlock = !this.isVisibleAuthBlock;
  }
}
