import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector   : 'ig-lazy-img',
  styleUrls  : ['./lazy-image.component.scss'],
  templateUrl: './lazy-image.component.html',
})
export class NameComponent implements OnInit {

  public classNames: { img: string, preview: string };
  public imageDisplayFull = false;

  @Input()
  public illustration: IIllustration;

  @Input('classNames')
  private _classNames = '';

  public ngOnInit(): void {
    this.classNames = {
      img    : [this._classNames, 'lazy-main'].join(' '),
      preview: [this._classNames, 'lazy-preview'].join(' '),
    };
  }

  public onImageLoad(): void {
    this.imageDisplayFull = true;
  }
}
