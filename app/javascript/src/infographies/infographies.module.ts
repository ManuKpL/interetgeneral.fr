import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import InfographiesComponent      from './pages/infographies/infographies.component';
import InfographiesModalComponent from './components/modal/modal.component';
import InfographiesResource       from './infographies.resource';

@NgModule({
  bootstrap: [InfographiesComponent],
  declarations: [InfographiesComponent, InfographiesModalComponent],
  exports: [InfographiesComponent],
  imports: [CommonModule],
  providers: [InfographiesResource]
})
export default class InfographiesModule { }
