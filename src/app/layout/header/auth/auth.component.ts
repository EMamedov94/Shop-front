import { Component } from '@angular/core';
import {HeaderComponent} from "../header.component";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isVisibleLoginBlock: boolean = false;
  isVisibleRegistrationBlock: boolean = false;
  constructor() {
  }

  openLogin() {
    this.isVisibleLoginBlock = true;
  }

  openRegistration() {
    this.isVisibleRegistrationBlock = true;
  }
}
