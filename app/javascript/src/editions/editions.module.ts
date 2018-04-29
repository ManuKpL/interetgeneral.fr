import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { HttpModule }    from '@angular/http';

import CoverComponent    from './cover/cover.component';
import EditionsComponent from './editions.parent/editions.component';
import EditionsResource  from './editions.resource';

@NgModule({
  bootstrap: [EditionsComponent],
  declarations: [CoverComponent, EditionsComponent],
  exports: [EditionsComponent],
  imports: [CommonModule, HttpModule],
  providers: [EditionsResource]
})
export default class EditionsModule { }
