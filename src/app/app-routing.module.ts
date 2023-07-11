import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CartComponent} from "./layout/header/cart/cart.component";
import {ProductPageComponent} from "./layout/product-list/product-page/product-page.component";
import {ProductListComponent} from "./layout/product-list/product-list.component";

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'cart', component: CartComponent},
  {path: 'product/:id', component: ProductPageComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
