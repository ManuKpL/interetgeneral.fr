import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import LandingPageModule from '../landingPage/landingPage.module';
import NavbarModule      from '../navbar/navbar.module';

import AppComponent      from './app.component';

@NgModule({
  bootstrap:    [AppComponent],
  declarations: [AppComponent],
  imports:      [BrowserModule, LandingPageModule, NavbarModule],
})
export class AppModule {}
