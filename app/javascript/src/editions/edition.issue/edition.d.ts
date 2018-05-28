declare interface IEditionIssue {
  imgSrc: string;
  title: string;
  shortDesc: string;
  number: number;
  latest: boolean;
  shopPath: string;
  date: Date;
  articles: IArticle[];
}

declare interface IEditionIssueApiData {
  image_url: string;
  title: string;
  short_desc: string;
  issue_number: number;
  latest_issue: boolean;
  shop_path: string;
  date: Date;
  articles: IArticleApiData[];
}

declare interface IArticle {

}

declare interface IArticleApiData {

}
