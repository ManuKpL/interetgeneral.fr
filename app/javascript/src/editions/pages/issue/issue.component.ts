import { Component, OnInit }      from '@angular/core';
import { Location }               from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PartialObserver }        from 'rxjs/Observer';

import EditionsResource           from '../../editions.resource';

@Component({
  selector: 'ig-editions-issue',
  templateUrl: './issue.template.html',
  styleUrls: ['./issue.styles.scss'],
})
export default class IssueComponent implements OnInit {

  public issue: IEditionIssue;
  public mainColor: string;

  constructor(
    private location: Location,
    private resource: EditionsResource,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  private static IG_RED = '#FA002E';
  private static ID_FORMAT: RegExp = /^\d+(-[a-z]+)+/i;

  public ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (IssueComponent.ID_FORMAT.test(id)) {
      this.getEditionIssue(id);
    } else {
      this.router.navigate(['/']);
    }
  }

  private getEditionIssue(id: string) {
    const observer: PartialObserver<IEditionIssue> = {
      next: (issue: IEditionIssue) => {
        this.issue = issue;
        this.mainColor = issue.color || IssueComponent.IG_RED;

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
