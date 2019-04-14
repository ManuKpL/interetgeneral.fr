import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { empty, from, Observable, throwError } from 'rxjs';
import { catchError, switchMap, switchMapTo } from 'rxjs/operators';

import { EditionsResource } from '../../services';
import { compose, splitShift, validatesRegex } from '../../../utils';
import { ArticleType, AccessStatus } from '../../enums';

@Component({
  selector   : 'ig-editions-article',
  styleUrls  : ['./article.page.scss'],
  templateUrl: './article.page.html',
})
export class ArticlePage implements OnInit {


  public article$: Observable<IArticle>;
  public imageDisplayFull = false;

  public constructor(
    private resource: EditionsResource,
    private route:    ActivatedRoute,
    private router:   Router,
  ) {}

  private readonly EDITIONS_PATH     = '/editions/';
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
      ) as Observable<IArticle>;
  }

  public onImageLoad(): void {
    this.imageDisplayFull = true;
  }

  public getImageArticleClasses(article: IArticle) {
    return `${this.getArticleTypeClassName(article)} article-img`;
  }

  public getArticleTypeClassName(article: IArticle) {
    const articleType: ArticleType = ArticleType[article.type];
    return articleType.className;
  }

  public getAccessStatusClassName(article: IArticle) {
    const accessStatus = this._getArticleAccessStatis(article);
    return accessStatus.className;
  }

  public getBackButtonLink({ edition }: IArticle) {
    return this.EDITIONS_PATH + edition.editionId;
  }

  public getEditionShopLink({ edition }: IArticle) {
    return edition.shopPath;
  }

  public getEditionTitle({ edition }: IArticle) {
    return `#${edition.number} <i>${edition.title}</i>`;
  }

  public shouldDisplayPartialCta(article: IArticle): boolean {
    return this._getArticleAccessStatis(article) === AccessStatus.PARTIAL;
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

  private _getArticle(ids: [string, string]): Observable<IArticle> {
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

  private _getArticleAccessStatis(article: IArticle) {
    return AccessStatus.valueOf(article.accessStatus);
  }
}
