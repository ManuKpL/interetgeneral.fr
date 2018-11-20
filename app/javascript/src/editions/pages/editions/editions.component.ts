import { Component, Input, OnInit } from '@angular/core';

import EditionsResource from '../../editions.resource';
import { PartialObserver } from 'rxjs/Observer';

@Component({
  selector: 'ig-editions',
  templateUrl: './editions.template.html',
  styleUrls: ['./editions.styles.scss'],
})
export default class EditionsComponent implements OnInit {
  coversGroupOne: ICoverDef[] = [];
  coversGroupTwo: ICoverDef[] = [];

  @Input() reducedList = false;
  @Input() pageTitle   = 'Numéros Parus';

  constructor(private resource: EditionsResource) {}

  ngOnInit() {
    if (this.reducedList) {
      const observer: PartialObserver<ICoverDef[]> = {
        next: (coversList: ICoverDef[]) => {
          this.coversGroupOne = coversList;
        },
      };
      this.resource
        .getEditionsSample()
        .subscribe(observer);
    }
    else {
      const observer: PartialObserver<ICoverDef[]> = {
        next: (coversList: ICoverDef[]) => {
          this.coversGroupOne = coversList.splice(0, 3);
          this.coversGroupTwo = coversList;
        },
      };
      this.resource
        .getEditions()
        .subscribe(observer);
    }
  }
}
