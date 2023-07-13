import { Component } from '@angular/core';
import {AuthenticationService} from "../../../../service/authentication.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(
    public authService: AuthenticationService
  ) {}

  onRegistration(email: string, password: string) {
    this.authService.onRegistration(email, password);
  }
}
