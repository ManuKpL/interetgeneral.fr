import { NgModule }    from '@angular/core';

import NavbarComponent from './navbar/navbar.component';

@NgModule({
  bootstrap:    [NavbarComponent],
  declarations: [NavbarComponent],
  exports:      [NavbarComponent],
})
export default class NavbarModule {};
