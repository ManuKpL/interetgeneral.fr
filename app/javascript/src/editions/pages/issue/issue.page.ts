import { Component, OnInit }      from '@angular/core';
import { Location }               from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PartialObserver }        from 'rxjs';

import { EditionsResource }       from '../../services';

@Component({
  selector   : 'ig-editions-issue',
  styleUrls  : ['./issue.page.scss'],
  templateUrl: './issue.page.html',
})
export class IssuePage implements OnInit {

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
    const id = this.route.snapshot.paramMap.get('editionId');
    if (IssuePage.ID_FORMAT.test(id)) {
      this._getEditionIssue(id);
    } else {
      this.router.navigate(['/']);
    }
  }

  // PRIVATE METHODS -----------------------------------------------------------

  private _getEditionIssue(id: string) {
    const observer: PartialObserver<IEditionIssue> = {
      next: (issue: IEditionIssue) => {
        this.issue = issue;
        this.mainColor = issue.color || IssuePage.IG_RED;

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
