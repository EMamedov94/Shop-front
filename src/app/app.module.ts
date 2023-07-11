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
import { AuthComponent } from './layout/header/auth/auth.component';
import { CartComponent } from './layout/header/cart/cart.component';
import { ProductPageComponent } from './layout/product-list/product-page/product-page.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { ProductListComponent } from './layout/product-list/product-list.component';
import {CookieService} from "ngx-cookie-service";
import {AuthenticationService} from "./service/authentication.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    AuthComponent,
    CartComponent,
    ProductPageComponent,
    TopbarComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ProductPageComponent,
    LoginComponent,
    HeaderComponent,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
