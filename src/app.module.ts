import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

import { LandingComponent } from './landingPage/landing.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ LandingComponent ],
  bootstrap:    [ LandingComponent ]
})
export class AppModule { }
