import { Component, ViewEncapsulation } from '@angular/core';

const bannerSrc = require('../../assets/images/banner.png');

@Component({
  selector: 'ig-app',
  templateUrl: './app.template.html',
  styleUrls: [ './app.styles.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export default class AppComponent {
  public name = 'world';
  public bannerSrc = bannerSrc;
}
