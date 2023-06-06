import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "./login/login.component";
import {FuncService} from "../../../service/funcs-service.service";
import {RegistrationComponent} from "./registration/registration.component";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor(private dialog: MatDialog) {
  }

  openLogin() {
    this.dialog.open(LoginComponent, {
      width: '500px',
      height: '300px'
    });
    this.dialog.getDialogById('auth-block')?.close();
  }

  openRegistration() {
    this.dialog.open(RegistrationComponent, {
      width: '500px',
      height: '300px'
    });
    this.dialog.getDialogById('auth-block')?.close();
  }
}
