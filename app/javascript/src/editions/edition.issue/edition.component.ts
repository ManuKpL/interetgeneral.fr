import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';
import EditionsResource from '../editions.resource';
import { PartialObserver } from 'rxjs/Observer';
import { Location } from '@angular/common';

@Component({
  selector: 'ig-edition-issue',
  templateUrl: './edition.template.html',
  styleUrls: ['./edition.styles.scss'],
})
export default class EditionComponent implements OnInit {

  public edition: IEditionIssue;

  constructor(
    private location: Location,
    private resource: EditionsResource,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

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
    const observer: PartialObserver<IEditionIssue> = {
      next: (issue: IEditionIssue) => {
        this.edition = issue;
        const routeId = this.route.snapshot.paramMap.get('id');
        if (issue.editionId !== id) {
          this.location.go(`/editions/${issue.editionId}`);
        }
      },
    };
    this.resource
      .getEditionIssue(id.split('-')[0])
      .subscribe(observer);
  }

}
