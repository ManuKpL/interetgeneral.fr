import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import CoverComponent    from './cover/cover.component';
import EditionsComponent from './editions.parent/editions.component';

@NgModule({
  bootstrap: [EditionsComponent],
  declarations: [CoverComponent, EditionsComponent],
  exports: [EditionsComponent],
  imports: [CommonModule],
})
export default class EditionsModule { }
