import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import RouterModule     from '../router/router.module';

import NavbarComponent  from './navbar/navbar.component';

@NgModule({
  bootstrap:    [NavbarComponent],
  declarations: [NavbarComponent],
  exports:      [NavbarComponent],
  imports:      [CommonModule, RouterModule],
})
export default class NavbarModule {}
