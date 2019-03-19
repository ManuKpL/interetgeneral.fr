import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, throwError, from, empty } from 'rxjs';
import { switchMap, catchError, switchMapTo } from 'rxjs/operators';
import { EditionsResource } from '../../services';

const validatesRegex = (regex: RegExp) => (s: string) => regex.test(s);
const splitShift     = (split: string | RegExp) => (s: string) => s.split(split).shift();

@Component({
  selector   : 'ig-editions-article',
  styleUrls  : ['./article.page.scss'],
  templateUrl: './article.page.html',
})
export class ArticlePage implements OnInit {

  public article$: Observable<any>;

  public constructor(
    private resource: EditionsResource,
    private route:    ActivatedRoute,
    private router:   Router,
  ) {}

  private readonly ID_FORMAT         = /^\d+(-[a-z]+)+/i;
  private readonly PARAMS_NAMES      = ['editionId', 'articleId'];
  private readonly INVALID_IDS_ERROR = 'INVALID_IDS';

  public ngOnInit(): void {
    this.article$ = this.route.paramMap
      .pipe(
        switchMap(this._readParamIds()),
        catchError(this._handleError()),
      );
  }

  // PRIVATE METHOD --------------------------------------------------------------------------------

  private _readParamIds(): (params: ParamMap) => Observable<string | string[]> {
    return (params: ParamMap) => {
      const ids = this.PARAMS_NAMES.map(name => params.get(name));
      return this._parseParamIds(ids);
    };
  }

  private _parseParamIds(ids: string[]): Observable<string | string[]> {
    if (ids.every(validatesRegex(this.ID_FORMAT))) {
      return this._getArticle(ids.map(splitShift('-')) as [string, string]);
    }
    return throwError(this.INVALID_IDS_ERROR);
  }

  private _getArticle(ids: [string, string]): Observable<any> {
    return this.resource.getEditionArticle(...ids);
  }

  private _handleError(): (error: any) => Observable<never> {
    return (error: any) => {
      if (error === this.INVALID_IDS_ERROR) {
        console.error('Invalid ids in path params');
      }

      return from(this.router.navigate(['/']))
        .pipe(switchMapTo(empty()));
    };
  }
}
