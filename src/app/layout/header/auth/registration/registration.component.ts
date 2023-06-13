import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FuncService} from "../../../../service/funcs-service.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private http: HttpClient,
              private func: FuncService) {
  }

  email: string = ''
  password: string = ''
  errors: any = ''
  // registrationForm: FormGroup;

  onRegistration(email: string, password: string) {
    this.http.post<any>(this.func.url + "/registrationNewUser", {email, password}).subscribe({
        error: err => {
          this.errors = err.error;
          console.log(err)
        }
      }
    )
  }
}
