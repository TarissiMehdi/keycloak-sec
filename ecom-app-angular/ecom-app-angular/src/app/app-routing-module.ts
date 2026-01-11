import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Products} from './ui/products/products';
import {Customers} from './ui/customers/customers';
import {AuthGuard} from './guards/auth-guard';
import {Orders} from './ui/orders/orders';
import {OrderDetails} from './ui/order-details/order-details';
import {HomeComponent} from './ui/home-component/home-component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path : "products", component : Products,canActivate:[AuthGuard],data :{roles:['ADMIN']}},
  {path : "customers", component : Customers,canActivate:[AuthGuard],data :{roles:['USER']}},
  {path : "orders" , component : Orders,canActivate:[AuthGuard],data :{roles:['USER']}},
  {path : "order-details/:id", component : OrderDetails,canActivate:[AuthGuard],data :{roles:['USER']}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
