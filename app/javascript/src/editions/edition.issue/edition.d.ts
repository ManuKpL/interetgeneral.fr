declare interface IEditionIssue {
  id: number,
  editionId: string,
  number: number,
  date: Date,
  title: string,
  shortDesc: string,
  imgSrc: string,
  previewSrc: string,
  shopPath: string,
  articles: IIssueArticle[],
}

declare interface IIssueArticle {
  id: number,
  title: string,
  type: string,
  lead: string,
  author: IIssueAuthor,
}

declare interface IIssueAuthor {
  id: number,
  firstName: string,
  lastName: string,
  fullName: string,
  description: string,
}
