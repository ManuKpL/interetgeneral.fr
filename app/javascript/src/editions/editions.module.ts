import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { HttpModule }    from '@angular/http';

import CoverComponent    from './cover/cover.component';
import EditionsComponent from './editions.parent/editions.component';
import EditionsResource  from './editions.resource';
import EditionComponent from './edition.issue/edition.component';

@NgModule({
  bootstrap: [EditionsComponent],
  declarations: [CoverComponent, EditionComponent, EditionsComponent],
  exports: [EditionsComponent],
  imports: [CommonModule, HttpModule],
  providers: [EditionsResource]
})
export default class EditionsModule { }
