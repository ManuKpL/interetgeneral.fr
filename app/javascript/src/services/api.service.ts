import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  getEditions(): Promise<ICoverDef[] | void> {
    const uriPath = '/api/editions';
    const handleReturn = (models: IEditionApiData[]): ICoverDef[] => {
     return models.map((model) => ({
        imgSrc:    model.image_url,
        title:     model.title,
        shortDesc: model.short_desc,
        number:    model.issue_number,
        latest:    model.latest_issue,
     })) as ICoverDef[];
    };

    return this.http.get(uriPath).toPromise()
      .then((res: Response): ICoverDef[] => handleReturn(res.json()))
      .catch((e: Error) => console.error(e));
  }

  getInfographics(): Promise<IInfoDef[] | void> {
    const uriPath = '/api/infographics';
    const handleReturn = (models: IInfographicApiData[]): IInfoDef[] => {
      return models.map((model) => ({
        imgSrc: model.image_url,
        title: model.title,
      }));
    };

    return this.http.get(uriPath).toPromise()
      .then((res: Response): IInfoDef[] => handleReturn(res.json()))
      .catch((e: Error) => console.error(e));
  }

}
