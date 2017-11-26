import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import EditionsModule    from '../editions/editions.module';
import LandingPageModule from '../landingPage/landingPage.module';
import NavbarModule      from '../navbar/navbar.module';
import RoutingModule     from '../router/router.module';

import AppComponent      from './app.component';

@NgModule({
  bootstrap:    [AppComponent],
  declarations: [AppComponent],
  exports:      [RoutingModule],
  imports:      [
    BrowserModule,
    EditionsModule,
    LandingPageModule,
    NavbarModule,
    RoutingModule,
  ],
})
export default class AppModule {}
