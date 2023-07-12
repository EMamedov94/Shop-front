import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HeaderComponent} from "../../header.component";
import {AuthenticationService} from "../../../../service/authentication.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(
    private http: HttpClient,
    private headComp: HeaderComponent,
    public authService: AuthenticationService
  ) {}

  onRegistration(email: string, password: string) {
    this.authService.onRegistration(email, password);
  }

  onClose() {
    this.headComp.isVisibleAuthBlock = false;
  }
}
