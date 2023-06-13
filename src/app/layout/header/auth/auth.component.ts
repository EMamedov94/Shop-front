import { Component } from '@angular/core';
import {HeaderComponent} from "../header.component";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor(private headerComp: HeaderComponent) {
  }

  openLogin() {
    this.headerComp.isVisibleLogin = true;
    this.headerComp.isVisible = false;
  }

  openRegistration() {
    this.headerComp.isVisibleRegistration = true;
    this.headerComp.isVisible = false;
  }
}
