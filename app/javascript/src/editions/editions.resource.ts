import { Injectable }      from '@angular/core';
import { Http, Response }  from '@angular/http';
import { Observable }      from 'rxjs/Observable';
import { of }              from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export default class EditionsResource {

  constructor(private http: Http) { }

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

  /*---------------------------- PRIVATE METHODS -----------------------------*/

  private getEditionsFromPath(uriPath: string): Observable<ICoverDef[] | IEditionIssue | {}> {
    return this.http
      .get(uriPath)
      .pipe(
        map((res: Response): ICoverDef[] | IEditionIssue => res.status === 200 && res.json()),
        catchError((e: Error): any => { console.error(e); return of(e); }),
      );
  }
}
