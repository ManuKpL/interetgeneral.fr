import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import RoutingModule     from '../router/router.module';

import CoverComponent    from './cover/cover.component';
import EditionsComponent from './editions.parent/editions.component';

@NgModule({
  bootstrap: [EditionsComponent],
  declarations: [CoverComponent, EditionsComponent],
  exports: [EditionsComponent],
  imports: [CommonModule, RoutingModule],
})
export default class EditionsModule { }
