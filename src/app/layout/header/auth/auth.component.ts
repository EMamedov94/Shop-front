import { Component } from '@angular/core';
import {AuthenticationService} from "../../../service/authentication.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isVisibleLoginBlock: boolean = false;
  isVisibleRegistrationBlock: boolean = false;

  constructor(
    public authService: AuthenticationService
  ) {}

  openLogin() {
    this.isVisibleLoginBlock = true;
  }

  openRegistration() {
    this.isVisibleRegistrationBlock = true;
  }
}
