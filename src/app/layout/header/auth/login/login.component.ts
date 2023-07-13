import { Component } from '@angular/core';
import {AuthenticationService} from "../../../../service/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    public authService: AuthenticationService
  ) {}

  onLogin(email: string, password: string) {
    this.authService.onLogin(email, password);
  }
}
