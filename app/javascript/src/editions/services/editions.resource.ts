import { Injectable }      from '@angular/core';
import { Http, Response }  from '@angular/http';
import { Observable }      from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { ArticlesResource } from './articles.resource';

@Injectable()
export class EditionsResource {

  constructor(
    private articles: ArticlesResource,
    private http:     Http,
  ) { }

  private EDITION_BASE_PATH = 'api/editions';

  /*----------------------------- PUBLIC METHODS -----------------------------*/

  public getEditionIssue(edition_id: string): Observable<IEditionIssue | {}> {
    const uriPath = `${this.EDITION_BASE_PATH}/${edition_id}`;
    return this.getEditionsFromPath(uriPath);
  }

  public getEditions(): Observable<ICoverDef[] | {}> {
    return this.getEditionsFromPath(this.EDITION_BASE_PATH);
  }

  public getEditionsSample(sampleSize = 3): Observable<ICoverDef[] | {}> {
    const uriPath = `${this.EDITION_BASE_PATH}?limit=${sampleSize}`;

    return this.getEditionsFromPath(uriPath);
  }

  public getEditionArticle(editionId: string, articleId: string): Observable<IArticle | {}> {
    const uriPath = `${this.EDITION_BASE_PATH}/${editionId}`;
    return this.articles.getIssueArticle(uriPath, articleId);
  }

  /*---------------------------- PRIVATE METHODS -----------------------------*/

  private getEditionsFromPath(uriPath: string): Observable<ICoverDef[] | IEditionIssue | {}> {
    return this.http
      .get(uriPath)
      .pipe(
        map((res: Response): ICoverDef[] | IEditionIssue => res.status === 200 && res.json()),
        catchError((e: Error): any => { console.error(e); return Observable.throw(e); }),
      );
  }
}
