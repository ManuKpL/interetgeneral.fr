import { Component } from '@angular/core';

@Component({
  selector: 'ig-landing-page',
  templateUrl: './landing.template.html',
  styles: [ './landing.styles.scss' ]
})
export class LandingComponent {
  public name = 'world';
}
