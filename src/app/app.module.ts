import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

import { AppComponent }     from './app.component';
import { LandingComponent } from '../landingPage/landing.component';

@NgModule({
  imports:      [BrowserModule],
  declarations: [AppComponent, LandingComponent],
  bootstrap:    [AppComponent]
})
export class AppModule {}
