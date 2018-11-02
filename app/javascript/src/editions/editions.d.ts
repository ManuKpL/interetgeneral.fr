declare interface ICoverDef {
  imgSrc: string;
  title: string;
  shortDesc: string;
  number: number;
  latest: boolean;
  shopPath: string;
  date: Date;
  editionId: string;
  previewSrc: string;
}

declare interface IEditionApiData {
  image_url: string;
  title: string;
  short_desc: string;
  issue_number: number;
  latest_issue: boolean;
  shop_path: string;
  date: Date;
  edition_id: string;
  preview_url: string;
}
