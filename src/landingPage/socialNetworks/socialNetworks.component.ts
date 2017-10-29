import { Component } from '@angular/core';

const logoInstagramSrc = require('../../../assets/images/instagram-logo.png')

@Component({
  selector: 'ig-landing-social-networks',
  templateUrl: './socialNetworks.template.html',
  styleUrls: [ './socialNetworks.styles.scss' ]
})
export class SocialNetworksComponent {
  public logoInstagramSrc = logoInstagramSrc;
}
