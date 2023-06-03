import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './layout/header/header.component';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './layout/header/auth/login/login.component';
import { RegistrationComponent } from './layout/header/auth/registration/registration.component';
import { ProfileComponent } from './page/profile/profile.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from "@angular/material/button";
import { AuthComponent } from './layout/header/auth/auth.component';
import { CartComponent } from './layout/header/cart/cart.component';
import { ProductsComponent } from './page/products/products.component';
import { ProductPageComponent } from './page/products/product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    AuthComponent,
    CartComponent,
    ProductsComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
