import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector   : 'ig-editions-article',
  styleUrls  : ['./article.page.scss'],
  templateUrl: './article.page.html',
})
export class ArticlePage implements OnInit {

  public constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  private static readonly ID_FORMAT    = /^\d+(-[a-z]+)+/i;
  private static readonly PARAMS_NAMES = ['editionId', 'articleId'];

  public ngOnInit(): void {
    const ids$ = this._readParamIds(this.route.paramMap);
  }

  // PRIVATE METHOD --------------------------------------------------------------------------------

  private _readParamIds(params$: Observable<ParamMap>): Observable<string[]> {
    return params$.pipe(
      map(params => ArticlePage.PARAMS_NAMES.map(name => params.get(name))),
    );
  }
}
