import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  public getEditions(): Promise<ICoverDef[] | void> {
    return this.getEditionsFromPath('/api/editions');
  }

  public getEditionsSample(sampleSize: number): Promise<ICoverDef[] | void> {
    return this.getEditionsFromPath(`/api/editions-sample?limit=${sampleSize}`);
  }

  public getInfographics(): Promise<IInfoDef[] | void> {
    return this.getInfographicsFromPath('/api/infographics');
  }

  public getInfographicsSample(sampleSize: number): Promise<IInfoDef[] | void> {
    return this.getInfographicsFromPath(`/api/infographics-sample?limit=${sampleSize}`);
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
