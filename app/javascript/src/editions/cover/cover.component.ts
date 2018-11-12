import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ig-editions-cover',
  templateUrl: './cover.template.html',
  styleUrls: ['./cover.styles.scss'],
})
export default class CoverComponent implements OnInit {

  @Input() cover: ICoverDef;

  public displayFull = false;
  public redirectLink: string;
  public redirectTarget: string;

  constructor(private router: Router) {}

  public onImageLoad(): void {
    this.displayFull = true;
  }

  ngOnInit() {
    if (this.cover.articlesCount) {
      this.redirectLink = `/editions/${this.cover.editionId}`;
      this.redirectTarget = '_self';
    }
    else {
      this.redirectLink = this.cover.shopPath;
      this.redirectTarget = '_blank';
    }
  }
}
