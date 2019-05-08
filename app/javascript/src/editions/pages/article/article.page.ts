import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { empty, from, Observable, throwError } from 'rxjs';
import { catchError, switchMap, switchMapTo } from 'rxjs/operators';

import { EditionsResource } from '../../services';
import { compose, splitShift, validatesRegex } from '../../../utils';
import { ArticleType, AccessStatus } from '../../enums';

import MetaTagsService from '../../../shared/services/meta-tags/meta-tags.service';

@Component({
  selector   : 'ig-editions-article',
  styleUrls  : ['./article.page.scss'],
  templateUrl: './article.page.html',
})
export class ArticlePage implements OnDestroy, OnInit {

  public article$: Observable<IArticle>;
  public imageDisplayFull = false;

  public constructor(
    private readonly ACTIVATED_ROUTE:   ActivatedRoute,
    private readonly EDITION_RESOURCE:  EditionsResource,
    private readonly META_TAGS_SERVICE: MetaTagsService,
    private readonly ROUTER:            Router,
  ) {}

  private readonly EDITIONS_PATH     = '/editions/';
  private readonly ID_FORMAT         = /^\d+(-[a-z]+)+/i;
  private readonly PARAMS_NAMES      = ['editionId', 'articleId'];
  private readonly INVALID_IDS_ERROR = 'INVALID_IDS';

  public ngOnInit(): void {
    this.article$ = this.ACTIVATED_ROUTE.paramMap
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

    this._addSocialMediaMetaTags();
  }

  public ngOnDestroy(): void {
    this._clearSocialMediaMetaTags();
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
    const accessStatus = this._getArticleAccessStatus(article);
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
    return this._getArticleAccessStatus(article) === AccessStatus.PARTIAL;
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
      return this.EDITION_RESOURCE.getEditionArticle(...ids);
    }
    throwError(this.INVALID_IDS_ERROR);
  }

  private _handleError(): (error: any) => Observable<never> {
    return (error: any) => {
      if (error === this.INVALID_IDS_ERROR) {
        console.error('Invalid ids in path params');
      }

      return from(this.ROUTER.navigate(['/']))
        .pipe(switchMapTo(empty()));
    };
  }

  private _getArticleAccessStatus(article: IArticle) {
    return AccessStatus.valueOf(article.accessStatus);
  }

  private _addOpenGraphMetaTags(article: IArticle): void {
    this.META_TAGS_SERVICE.setOpenGraphTags({
      type:        'article',
      title:       article.title,
      description: article.lead,
      url:         this.ROUTER.url,
      image:       article.illustration ? article.illustration.imgSrc : '',
    });
  }

  private _addTwitterMetaTags(article: IArticle): void {

    const hasIllustration = !!article.illustration;
    const { imgSrc }      = hasIllustration ? article.illustration  : article.edition;
    const cardType        = hasIllustration ? 'summary_large_image' : 'summary';

    this.META_TAGS_SERVICE.setTwitterTags({
      card:        cardType,
      title:       article.title,
      description: article.lead,
      url:         this.ROUTER.url,
      image:       imgSrc,
    });
  }

  private _addSocialMediaMetaTags(): void {
    this.article$.subscribe({
      next: article => {
        this._addTwitterMetaTags(article);
        this._addOpenGraphMetaTags(article);
      },
    });
  }

  private _clearSocialMediaMetaTags(): void {
    this.META_TAGS_SERVICE.clearTwitterTags();
    this.META_TAGS_SERVICE.clearOpenGraphTags();
  }
}
