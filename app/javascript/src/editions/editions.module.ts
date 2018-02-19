import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { HttpModule }    from '@angular/http';

import { ApiService }    from '../services/api.service';

import CoverComponent    from './cover/cover.component';
import EditionsComponent from './editions.parent/editions.component';

@NgModule({
  bootstrap: [EditionsComponent],
  declarations: [CoverComponent, EditionsComponent],
  exports: [EditionsComponent],
  imports: [CommonModule, HttpModule],
  providers: [ApiService]
})
export default class EditionsModule { }
