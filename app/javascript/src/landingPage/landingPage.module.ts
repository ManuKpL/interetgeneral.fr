import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import EditionsModule     from '../editions/editions.module';
import InfographiesModule from '../infographies/infographies.module';
import RouterModule       from '../router/router.module';

import LandingComponent        from './landing.parent/landing.component';
import SocialNetworksComponent from './socialNetworks/socialNetworks.component';

@NgModule({
  bootstrap:    [LandingComponent],
  declarations: [LandingComponent, SocialNetworksComponent],
  exports:      [LandingComponent],
  imports:      [CommonModule, EditionsModule, InfographiesModule, RouterModule],
})
export default class LandingPageModule {}
