import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import EditionsModule     from '../editions/editions.module';
import LandingPageModule  from '../landingPage/landingPage.module';
import InfographiesModule from '../infographies/infographies.module';
import NavbarModule       from '../navbar/navbar.module';
import RoutingModule      from '../router/router.module';

import AppComponent       from './app.component';

@NgModule({
  bootstrap:    [AppComponent],
  declarations: [AppComponent],
  imports:      [
    BrowserModule,
    EditionsModule,
    LandingPageModule,
    InfographiesModule,
    NavbarModule,
    RoutingModule,
  ],
})
export default class AppModule {}
