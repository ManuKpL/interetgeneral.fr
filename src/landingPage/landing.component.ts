import { Component } from '@angular/core';

const bannerSrc = require('../../assets/images/banner.png');
const coversList = [
  {
    path: require('../../assets/images/covers/3-placeholder.png'),
    title: 'Les campagnes',
    shortDesc: 'Ce numéro est consacré à un sujet important',
    number: 3,
  },
  {
    path: require('../../assets/images/covers/2-travail.png'),
    title: 'Le travail',
    shortDesc: 'Ce numéro est consacré à un sujet important',
    number: 2,
  },
  {
    path: require('../../assets/images/covers/1-medias.png'),
    title: 'Les médias',
    shortDesc: 'Ce numéro est consacré à un sujet important',
    number: 1,
  }
] as ICoverDef[];

@Component({
  selector: 'ig-landing-page',
  templateUrl: './landing.template.html',
  styleUrls: [ './landing.styles.scss' ]
})
export default class LandingComponent {
  bannerSrc: string = bannerSrc;
  coversGroupOne: ICoverDef[] = coversList.slice(0, 3);
  coversGroupTwo: ICoverDef[] = coversList.slice(3, coversList.length);
}
