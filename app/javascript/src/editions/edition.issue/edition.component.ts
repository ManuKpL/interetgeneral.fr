import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';
import EditionsResource from '../editions.resource';

@Component({
  selector: 'ig-edition-issue',
  templateUrl: './edition.template.html',
  styleUrls: ['./edition.styles.scss'],
})
export default class EditionComponent implements OnInit {

  public edition: IEditionIssue;

  constructor(private route: ActivatedRoute, private router: Router, private resource: EditionsResource) {}

  private static ID_FORMAT: RegExp = /^\d+(-[a-z]+)+/i;

  public ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (EditionComponent.ID_FORMAT.test(id)) {
      this.getEditionIssue(id);
    } else {
      this.router.navigate(['/']);
    }
  }

  private getEditionIssue(id: string) {
    this.resource
      .getEditionIssue(id.split('-')[0])
      .then((issue: IEditionIssue) => { this.edition = issue; });
  }

}
