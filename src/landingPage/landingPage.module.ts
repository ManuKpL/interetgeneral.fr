import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import CoverComponent          from './cover/cover.component';
import LandingComponent        from './landing.component';
import SocialNetworksComponent from './socialNetworks/socialNetworks.component';

@NgModule({
  bootstrap:    [LandingComponent],
  declarations: [LandingComponent, SocialNetworksComponent, CoverComponent],
  exports:      [LandingComponent],
  imports:      [CommonModule]
})
export default class LandingPageModule {}
