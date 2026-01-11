import {
  APP_INITIALIZER,
  ApplicationConfig,
  NgModule,
  provideBrowserGlobalErrorListeners, provideZoneChangeDetection,
  provideZonelessChangeDetection
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Products } from './ui/products/products';
import { Customers } from './ui/customers/customers';
// @ts-ignore
import {HttpClientModule} from '@angular/common/http';
import {KeycloakAngularModule, KeycloakService, provideKeycloak} from 'keycloak-angular';
import { Orders } from './ui/orders/orders';
import { OrderDetails } from './ui/order-details/order-details';
import { HomeComponent } from './ui/home-component/home-component';


function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8082',
        realm: 'bdcc-app',
        clientId: 'ecom-client-ang'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/silent-check-sso.html'
      }
    });
}

@NgModule({
  declarations: [
    App,
    Products,
    Customers,
    Orders,
    OrderDetails,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    {provide : APP_INITIALIZER, useFactory : initializeKeycloak, multi :true, deps : [KeycloakService]}
  ],
  bootstrap: [App]
})
export class AppModule { }
