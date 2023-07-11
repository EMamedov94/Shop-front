import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BasicService} from "../../../../service/basic.service";
import {HeaderComponent} from "../../header.component";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private http: HttpClient,
              private headComp: HeaderComponent,
              private basicService: BasicService) {
  }

  email: string = ''
  password: string = ''
  errors: any = ''

  onRegistration(email: string, password: string) {
    this.http.post<any>(this.basicService.url + "/registrationNewUser", {email, password}).subscribe({
      next: () => {
        setTimeout(() => {
          this.onClose();
        }, 2000)
      },
      error: err => {
        this.errors = err.error;
      }
    })
  }

  onClose() {
    this.headComp.isVisibleAuthBlock = false;
  }
}
