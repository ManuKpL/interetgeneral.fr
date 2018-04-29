import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export default class EditionsResource {

  constructor(private http: Http) { }

  private EDITION_BASE_PATH = '/api/editions';

  /*----------------------------- PUBLIC METHODS -----------------------------*/

  public getEditionIssue(edition_id: string): Promise<IEditionIssue | void> {
    const uriPath = `${this.EDITION_BASE_PATH}/${edition_id}`;

    return this.http.get(uriPath).toPromise()
      .then((res: Response): IEditionIssue => this.buildEditionForIssue(res.json()))
      .catch((e: Error) => console.error(e));
  }

  public getEditions(): Promise<ICoverDef[] | void> {
    return this.getEditionsFromPath(this.EDITION_BASE_PATH);
  }

  public getEditionsSample(sampleSize = 3): Promise<ICoverDef[] | void> {
    return this.getEditionsFromPath(`${this.EDITION_BASE_PATH}?limit=${sampleSize}`);
  }

  /*---------------------------- PRIVATE METHODS -----------------------------*/

  private getEditionsFromPath(uriPath: string): Promise<ICoverDef[] | void>  {
    return this.http.get(uriPath).toPromise()
      .then((res: Response): ICoverDef[] => this.buildEditionsForCovers(res.json()))
      .catch((e: Error) => console.error(e));
  }

  private buildEditionForIssue(editionIssue: IEditionIssueApiData): IEditionIssue {
    return {
      imgSrc: editionIssue.image_url,
      title: editionIssue.title,
      shortDesc: editionIssue.short_desc,
      number: editionIssue.issue_number,
      latest: editionIssue.latest_issue,
      shopPath: editionIssue.shop_path,
      date: new Date(editionIssue.date),
      articles: editionIssue.articles.map((article: IArticleApiData) => ({
      } as IArticle)),
    } as IEditionIssue;
  }

  private buildEditionsForCovers(models: IEditionApiData[]): ICoverDef[] {
    return models.map((model) => ({
      editionId: model.edition_id,
      imgSrc: model.image_url,
      title: model.title,
      shortDesc: model.short_desc,
      number: model.issue_number,
      latest: model.latest_issue,
      shopPath: model.shop_path,
      date: new Date(model.date),
    })) as ICoverDef[];
  }

}
