import { Component } from '@angular/core';

const bannerSrc = require('../../assets/images/banner.png');
const logoInstagramSrc = require('../../assets/images/instagram-logo.png')

@Component({
  selector: 'ig-landing-page',
  templateUrl: './landing.template.html',
  styleUrls: [ './landing.styles.scss' ]
})
export class LandingComponent {
  public bannerSrc = bannerSrc;
  public logoInstagramSrc = logoInstagramSrc;
}
