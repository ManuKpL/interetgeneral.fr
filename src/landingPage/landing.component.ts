import { Component, OnInit } from '@angular/core';

const bannerSrc = require('../../assets/images/banner.png');
const coversList = [
  {
    imgSrc: require('../../assets/images/covers/3-placeholder.png'),
    title: 'Les campagnes',
    shortDesc: 'Ce numéro est consacré à un sujet important',
    number: 3,
    latest: false,
  },
  {
    imgSrc: require('../../assets/images/covers/2-travail.png'),
    title: 'Le travail',
    shortDesc: 'Ce numéro est consacré à un sujet important',
    number: 2,
    latest: false,
  },
  {
    imgSrc: require('../../assets/images/covers/1-medias.png'),
    title: 'Les médias',
    shortDesc: 'Ce numéro est consacré à un sujet important',
    number: 1,
    latest: false,
  }
] as ICoverDef[];

@Component({
  selector: 'ig-landing-page',
  templateUrl: './landing.template.html',
  styleUrls: [ './landing.styles.scss' ]
})
export default class LandingComponent implements OnInit {
  bannerSrc: string = bannerSrc;
  coversGroupOne: ICoverDef[] = [];
  coversGroupTwo: ICoverDef[] = [];

  ngOnInit() {
    coversList[0].latest = true;

    this.coversGroupOne = coversList.slice(0, 3);
    this.coversGroupTwo = coversList.slice(3, coversList.length);
  }
}
