import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import RoutingModule    from '../router/router.module';

import NavbarComponent  from './navbar/navbar.component';

@NgModule({
  bootstrap:    [NavbarComponent],
  declarations: [NavbarComponent],
  exports:      [NavbarComponent],
  imports:      [CommonModule, RoutingModule],
})
export default class NavbarModule {}
