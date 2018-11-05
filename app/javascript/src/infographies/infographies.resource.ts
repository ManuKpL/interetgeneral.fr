import { Injectable }      from '@angular/core';
import { Http, Response }  from '@angular/http';
import { Observable }      from 'rxjs/Observable';
import { of }              from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export default class InfographiesResource {

  constructor(private http: Http) { }

  private INFOGRAPHIC_BASE_PATH = '/api/infographics';

  public getInfographics(): Observable<IInfoDef[] | {}> {
    return this.getInfographicsFromPath(this.INFOGRAPHIC_BASE_PATH);
  }

  public getInfographicsSample(sampleSize = 3): Observable<IInfoDef[] | {}> {
    return this.getInfographicsFromPath(`${this.INFOGRAPHIC_BASE_PATH}?limit=${sampleSize}`);
  }

  // ******************************** PRIVATE ******************************* //

  private getInfographicsFromPath(uriPath: string): Observable<IInfoDef[] | {}> {
    return this.http.get(uriPath)
      .pipe(
        map((res: Response): IInfoDef[] => res.json() as IInfoDef[]),
        catchError((e: Error) => { console.error(e); return of(e); })
      );
  }
}
