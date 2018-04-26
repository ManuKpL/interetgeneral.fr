import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  private EDITION_BASE_PATH = '/api/edition';
  private INFOGRAPHIC_BASE_PATH = '/api/infographic';

  public getEditions(): Promise<ICoverDef[] | void> {
    return this.getEditionsFromPath(this.EDITION_BASE_PATH);
  }

  public getEditionsSample(sampleSize = 3): Promise<ICoverDef[] | void> {
    return this.getEditionsFromPath(`${this.EDITION_BASE_PATH}?limit=${sampleSize}`);
  }

  public getInfographics(): Promise<IInfoDef[] | void> {
    return this.getInfographicsFromPath(this.INFOGRAPHIC_BASE_PATH);
  }

  public getInfographicsSample(sampleSize = 3): Promise<IInfoDef[] | void> {
    return this.getInfographicsFromPath(`${this.INFOGRAPHIC_BASE_PATH}?limit=${sampleSize}`);
  }

  // ******************************** PRIVATE ******************************* //

  private getEditionsFromPath(uriPath: string): Promise<ICoverDef[] | void>  {
    const handleReturn = (models: IEditionApiData[]): ICoverDef[] => {
      return models.map((model) => ({
        imgSrc:    model.image_url,
        title:     model.title,
        shortDesc: model.short_desc,
        number:    model.issue_number,
        latest:    model.latest_issue,
        shopPath:  model.shop_path,
        date:      new Date(model.date),
     })) as ICoverDef[];
    };

    return this.http.get(uriPath).toPromise()
      .then((res: Response): ICoverDef[] => handleReturn(res.json()))
      .catch((e: Error) => console.error(e));
  }

  private getInfographicsFromPath(uriPath: string): Promise<IInfoDef[] | void> {
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
