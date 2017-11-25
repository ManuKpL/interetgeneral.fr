import { Component } from '@angular/core';

const logoIG = require('../../../assets/images/IG-logo.png');

@Component({
  selector: 'ig-navbar',
  templateUrl: './navbar.template.html',
  styleUrls: ['./navbar.styles.scss']
})
export default class NavbarComponent {
  public logoIG: string = logoIG;
};
