import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { EditionsResource } from '../../services';

@Component({
  selector   : 'ig-editions',
  styleUrls  : ['./editions.page.scss'],
  templateUrl: './editions.page.html',
})
export class EditionsPage implements OnInit {

  public covers$: Observable<{
    coversGroupOne:  ICoverDef[],
    coversGroupTwo?: ICoverDef[],
  }>;

  @Input() public reducedList = false;
  @Input() public pageTitle   = 'Numéros Parus';

  public constructor(private resource: EditionsResource) {}

  // LIFECYCLE -------------------------------------------------------------------------------------

  public ngOnInit(): void {
    this.covers$ = this._getCovers();
  }

  // PRIVATE METHODS -------------------------------------------------------------------------------

  private _getCovers() {
    if (this.reducedList) {
      return this.resource.getEditionsSample()
        .pipe(
          map((coversList: ICoverDef[]) => ({
            coversGroupOne: coversList,
          })),
        );
    }

    return this.resource.getEditions()
      .pipe(
        map((coversList: ICoverDef[]) => ({
          coversGroupOne: coversList.splice(0, 3),
          coversGroupTwo: coversList,
        })),
      );
  }
}
