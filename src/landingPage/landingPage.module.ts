import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LandingComponent }        from './landing.component';
import { SocialNetworksComponent } from './socialNetworks/socialNetworks.component';

@NgModule({
  imports:      [BrowserModule],
  exports:      [LandingComponent],
  declarations: [LandingComponent, SocialNetworksComponent],
  bootstrap:    [LandingComponent]
})
export class LandingPageModule {}
