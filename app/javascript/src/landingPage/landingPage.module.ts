import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import EditionsModule     from '../editions/editions.module';
import InfographiesModule from '../infographies/infographies.module';
import RouterModule       from '../router/router.module';

import AnnouncementComponent   from './announcement/announcement.component';
import LandingComponent        from './landing.parent/landing.component';
import SocialNetworksComponent from './socialNetworks/socialNetworks.component';

import AnnouncementsResource from './announcements.resource';

@NgModule({
  bootstrap:    [LandingComponent],
  declarations: [LandingComponent, SocialNetworksComponent, AnnouncementComponent],
  exports:      [LandingComponent],
  imports:      [CommonModule, EditionsModule, InfographiesModule, RouterModule],
  providers:    [AnnouncementsResource]
})
export default class LandingPageModule {}
