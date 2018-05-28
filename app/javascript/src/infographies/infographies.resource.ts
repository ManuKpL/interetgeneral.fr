import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export default class InfographiesResource {

  constructor(private http: Http) { }

  private INFOGRAPHIC_BASE_PATH = '/api/infographics';

  public getInfographics(): Promise<IInfoDef[] | void> {
    return this.getInfographicsFromPath(this.INFOGRAPHIC_BASE_PATH);
  }

  public getInfographicsSample(sampleSize = 3): Promise<IInfoDef[] | void> {
    return this.getInfographicsFromPath(`${this.INFOGRAPHIC_BASE_PATH}?limit=${sampleSize}`);
  }

  // ******************************** PRIVATE ******************************* //

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
