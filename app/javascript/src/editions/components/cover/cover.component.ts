import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector   : 'ig-editions-cover',
  styleUrls  : ['./cover.component.scss'],
  templateUrl: './cover.component.html',
})
export class CoverComponent implements OnInit {

  @Input() cover: ICoverDef;

  public displayFull = false;
  public redirectLink: string;
  public redirectTarget: string;

  constructor() {}

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
