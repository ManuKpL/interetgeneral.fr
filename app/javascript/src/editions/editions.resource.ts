import { Injectable }      from '@angular/core';
import { Http, Response }  from '@angular/http';
import { Observable }      from 'rxjs/Observable';
import { of }              from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export default class EditionsResource {

  constructor(private http: Http) { }

  private EDITION_BASE_PATH = '/api/editions';

  /*----------------------------- PUBLIC METHODS -----------------------------*/

  public getEditionIssue(edition_id: string): Observable<IEditionIssue | {}> {
    const uriPath = `${this.EDITION_BASE_PATH}/${edition_id}`;

    return this.getEditionsFromPath(uriPath, this.buildEditionForIssue);
  }

  public getEditions(): Observable<ICoverDef[] | {}> {
    return this.getEditionsFromPath(this.EDITION_BASE_PATH, this.buildEditionsForCovers );
  }

  public getEditionsSample(sampleSize = 3): Observable<ICoverDef[] | {}> {
    const uriPath = `${this.EDITION_BASE_PATH}?limit=${sampleSize}`;

    return this.getEditionsFromPath(uriPath, this.buildEditionsForCovers);
  }

  /*---------------------------- PRIVATE METHODS -----------------------------*/

  private getEditionsFromPath(
    uriPath: string,
    mappingFunction: (json: any) => ICoverDef[] | IEditionIssue,
  ): Observable<ICoverDef[] | IEditionIssue | {}> {
    return this.http
      .get(uriPath)
      .pipe(
        map((res: Response): ICoverDef[] | IEditionIssue => mappingFunction(res.json())),
        catchError((e: Error): any => { console.error(e); return of(e); }),
      );
  }

  private buildEditionForIssue(editionIssue: IEditionIssueApiData): IEditionIssue {
    return {
      imgSrc   : editionIssue.image_url,
      title    : editionIssue.title,
      shortDesc: editionIssue.short_desc,
      number   : editionIssue.issue_number,
      latest   : editionIssue.latest_issue,
      shopPath : editionIssue.shop_path,
      date     : new Date(editionIssue.date),
      articles : editionIssue.articles.map((article: IArticleApiData) => ({
      } as IArticle)),
    } as IEditionIssue;
  }

  private buildEditionsForCovers(models: IEditionApiData[]): ICoverDef[] {
    return models.map((model) => ({
      editionId : model.edition_id,
      imgSrc    : model.image_url,
      title     : model.title,
      shortDesc : model.short_desc,
      number    : model.issue_number,
      latest    : model.latest_issue,
      shopPath  : model.shop_path,
      date      : new Date(model.date),
      previewSrc: model.preview_url,
    })) as ICoverDef[];
  }
}
