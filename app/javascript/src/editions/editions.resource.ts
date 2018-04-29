import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export default class EditionsResource {

  constructor(private http: Http) { }

  private EDITION_BASE_PATH = '/api/editions';

  public getEditions(): Promise<ICoverDef[] | void> {
    return this.getEditionsFromPath(this.EDITION_BASE_PATH);
  }

  public getEditionsSample(sampleSize = 3): Promise<ICoverDef[] | void> {
    return this.getEditionsFromPath(`${this.EDITION_BASE_PATH}?limit=${sampleSize}`);
  }

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

}
