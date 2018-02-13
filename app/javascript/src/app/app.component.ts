import { Component, OnInit }     from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'ig-app',
  templateUrl: './app.template.html'
})
export default class AppComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
