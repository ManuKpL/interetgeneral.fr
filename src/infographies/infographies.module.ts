import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import RoutingModule from '../router/router.module';

import InfographiesComponent      from './infographies.parent/infographies.component';
import InfographiesModalComponent from './modal/modal.component';

@NgModule({
  bootstrap: [InfographiesComponent],
  declarations: [InfographiesComponent, InfographiesModalComponent],
  exports: [InfographiesComponent],
  imports: [CommonModule, RoutingModule],
})
export default class InfographiesModule { }
