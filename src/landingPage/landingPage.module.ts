import { NgModule }      from '@angular/core';

import { LandingComponent }        from './landing.component';
import { SocialNetworksComponent } from './socialNetworks/socialNetworks.component';

@NgModule({
  exports:      [LandingComponent],
  declarations: [LandingComponent, SocialNetworksComponent],
  bootstrap:    [LandingComponent]
})
export class LandingPageModule {}
