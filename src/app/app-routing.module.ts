import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HeaderComponent} from "./layout/header/header.component";
import {FormsModule} from "@angular/forms";
import {ProfileComponent} from "./page/profile/profile.component";
import {CartComponent} from "./layout/header/cart/cart.component";
import {AppComponent} from "./app.component";
import {ProductPageComponent} from "./page/products/product-page/product-page.component";

const routes: Routes = [
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'cart', component: CartComponent},
  {path: 'product/:id', component: ProductPageComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
