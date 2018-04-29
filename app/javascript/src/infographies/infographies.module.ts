import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import InfographiesComponent      from './infographies.parent/infographies.component';
import InfographiesModalComponent from './modal/modal.component';
import InfographiesResource       from './infographies.resource';

@NgModule({
  bootstrap: [InfographiesComponent],
  declarations: [InfographiesComponent, InfographiesModalComponent],
  exports: [InfographiesComponent],
  imports: [CommonModule],
  providers: [InfographiesResource]
})
export default class InfographiesModule { }
