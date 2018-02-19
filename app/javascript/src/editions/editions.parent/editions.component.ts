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
    this.api.getEditions().then((coversList: ICoverDef[]) => {
      this.coversGroupOne = coversList.slice(0, 3);
      if (!this.reducedList) {
        this.coversGroupTwo = coversList.slice(3, coversList.length);
      }
    });
  }
}
