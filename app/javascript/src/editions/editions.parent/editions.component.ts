import { Component, Input, OnInit } from '@angular/core';
import { ApiService }               from '../../services/api.service';

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

  constructor(private api: ApiService) {}

  ngOnInit() {
    if (this.reducedList) {
      this.api.getEditionsSample().then((coversList: ICoverDef[]) => {
        this.coversGroupOne = coversList;
      });
    }
    else {
      this.api.getEditions().then((coversList: ICoverDef[]) => {
        this.coversGroupOne = coversList.splice(0, 3);
        this.coversGroupTwo = coversList;
      });
    }
  }
}
