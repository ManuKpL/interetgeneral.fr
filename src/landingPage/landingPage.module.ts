import { NgModule }      from '@angular/core';

import { LandingComponent }        from './landing.component';
import { SocialNetworksComponent } from './socialNetworks/socialNetworks.component';

@NgModule({
  bootstrap:    [LandingComponent],
  declarations: [LandingComponent, SocialNetworksComponent],
  exports:      [LandingComponent],
})
export class LandingPageModule {}
