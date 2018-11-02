import { Component, Input } from '@angular/core';

@Component({
  selector: 'ig-editions-cover',
  templateUrl: './cover.template.html',
  styleUrls: ['./cover.styles.scss'],
})
export default class CoverComponent {

  @Input() cover: ICoverDef;

  public displayFull = false;

  public onImageLoad(): void {
    this.displayFull = true;
  }
}
