import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ArticlesResource {

  public constructor(private http: Http) {}

  private readonly ARTICLE_SUBRESOURCE_PATH = 'articles';

  public getIssueArticle(editionPath: string, articleId: string) {
    const uriPath = `${editionPath}/${this.ARTICLE_SUBRESOURCE_PATH}/${articleId}`;
    return this._getArticleFromPath(uriPath);
  }

  private _getArticleFromPath(uriPath: string): Observable<IArticle | {}> {
    return this.http.get(uriPath)
      .pipe(
        map((res: Response): IArticle => res.status === 200 && res.json()),
        catchError((e: Error): any => { console.error(e); return throwError(e); }),
      );
  }
}
