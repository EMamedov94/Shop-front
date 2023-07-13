import { Component } from '@angular/core';
import {AuthenticationService} from "../../service/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    public authService: AuthenticationService
  ) {}

  logout() {
    this.authService.logout();
  }

  openAuthMenu() {
    this.authService.isVisibleAuthBlock = !this.authService.isVisibleAuthBlock;
  }
}
