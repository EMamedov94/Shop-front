import {Component} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };

  constructor(private http: HttpClient) {
  }

  email: any = "";
  balance: any = 0.0;
  name: string = "";
  photoUrl: any = '';
  description: string = "";
  price: any = 0.0;
  qty: any = 0;

  addProduct(name: any, description: any, price: any, qty: any) {
    const formData = new FormData();
    let prod = {
      name: name,
      description: description,
      price: price,
      qty: qty
    }

    formData.append('product', new Blob([JSON.stringify(prod)],{type: 'application/json'}));
    formData.append('photoUrl', this.photoUrl);

    this.http.post<any>('/api' + '/profile' + '/addNewProduct', formData, this.httpOptions).subscribe()
  }

  ngOnInit() {
    this.http.get<any>('/api' + '/profile/' + localStorage.getItem('userId')).subscribe({
      next: ((res: any) => {
        this.email = res.email;
        this.balance = res.balance;
      })
    })
  }

  onFileSelected(event: any) {
    const file:File = event.target.files[0];
    if (file) {
      this.photoUrl = file;
    }
  }
}
