import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor() {
  }

  id: any = localStorage.getItem('userId');
  cartQty: any;
  isVisibleLogin: boolean = false;
  isVisibleRegistration: boolean = false;
  isVisible: boolean = false;

  logout() {
    localStorage.clear();
  }

  get logIn(): boolean {
    return (localStorage.getItem('token') != null);
  }

  get isAdmin(): boolean {
    return (localStorage.getItem('admin') && this.logIn) == true
  }

  openAuthMenu() {
    this.isVisible = !this.isVisible;
  }
}
