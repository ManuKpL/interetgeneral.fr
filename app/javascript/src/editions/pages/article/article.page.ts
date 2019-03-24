import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { empty, from, Observable, throwError } from 'rxjs';
import { catchError, switchMap, switchMapTo } from 'rxjs/operators';

import { EditionsResource } from '../../services';
import { compose, splitShift, validatesRegex } from '../../../utils';

@Component({
  selector   : 'ig-editions-article',
  styleUrls  : ['./article.page.scss'],
  templateUrl: './article.page.html',
})
export class ArticlePage implements OnInit {

  public article$: Observable<any>;
  public imageDisplayFull = false;

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
        switchMap(
          compose(
            this._getArticle.bind(this),
            this._parseParamIds.bind(this),
            this._readParamIds.bind(this),
          ),
        ),
        catchError(this._handleError()),
      );
  }

  public onImageLoad(): void {
    this.imageDisplayFull = true;
  }

  // PRIVATE METHOD --------------------------------------------------------------------------------

  private _readParamIds(params: ParamMap): string[] {
    return this.PARAMS_NAMES.map(name => params.get(name));
  }

  private _parseParamIds(ids: string[]): string[] {
    if (ids.every(validatesRegex(this.ID_FORMAT))) {
      return ids.map(splitShift('-'));
    }
    return null;
  }

  private _getArticle(ids: [string, string]): Observable<any> {
    if (ids) {
      return this.resource.getEditionArticle(...ids);
    }
    throwError(this.INVALID_IDS_ERROR);
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
