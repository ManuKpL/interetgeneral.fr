import { Component } from '@angular/core';

const bannerSrc = require('../../assets/images/banner.png');

@Component({
  selector: 'ig-landing-page',
  templateUrl: './landing.template.html',
  styleUrls: [ './landing.styles.scss' ]
})
export class LandingComponent {
  public bannerSrc = bannerSrc;
}
