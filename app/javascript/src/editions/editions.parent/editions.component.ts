import { Component, Input, OnInit } from '@angular/core';

import EditionsResource from '../editions.resource';

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
      this.resource.getEditionsSample().then((coversList: ICoverDef[]) => {
        this.coversGroupOne = coversList;
      });
    }
    else {
      this.resource.getEditions().then((coversList: ICoverDef[]) => {
        this.coversGroupOne = coversList.splice(0, 3);
        this.coversGroupTwo = coversList;
      });
    }
  }
}
