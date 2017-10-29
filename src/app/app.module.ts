import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';

import { LandingPageModule } from '../landingPage/landingPage.module';

import { AppComponent }      from './app.component';

@NgModule({
  imports:      [BrowserModule, LandingPageModule],
  declarations: [AppComponent],
  bootstrap:    [AppComponent]
})
export class AppModule {}
