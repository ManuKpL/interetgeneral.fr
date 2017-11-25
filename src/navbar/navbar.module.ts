import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';


import NavbarComponent from './navbar/navbar.component';

@NgModule({
  bootstrap:    [NavbarComponent],
  declarations: [NavbarComponent],
  exports:      [NavbarComponent],
  imports:      [CommonModule],
})
export default class NavbarModule {}
