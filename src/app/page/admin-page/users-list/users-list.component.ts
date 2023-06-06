import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  constructor(private http: HttpClient) {
  }
  users: any;

  ngOnInit() {
    this.http.get('/api' + '/adminPage' + '/showAllUsers', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).subscribe({
      next: ((res: any) => {
        this.users = res;
      })
    })
  }
}
