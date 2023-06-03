import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FuncService} from "../../../../service/funcs-service.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private http: HttpClient,
              private func: FuncService) {
  }

  email: string = ""
  password: string = ""

  onRegistration(email: string, password: string) {
    this.http.post<any>(this.func.url + "/registrationNewUser", {email, password}, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe({
        next: ((res: any) => {
          console.log(res)
        }),
        error: err => {
          console.log(err)
        }
      }
    )
  }
}
