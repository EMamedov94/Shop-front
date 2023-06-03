import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncService {

  constructor() { }

  url: string = "https://localhost:8080"

  isAuth(): boolean {
    return (localStorage.getItem('token') != null);
  }
}
