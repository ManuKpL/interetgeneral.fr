declare interface IEditionIssue {
  id: number,
  editionId: string,
  number: number,
  date: Date,
  title: string,
  shortDesc: string,
  shopPath: string,
  articles: IIssueArticle[],
}

declare interface IIssueArticle {
  id: number,
  title: string,
  author: IIssueAuthor,
  lead: string,
  content: string,
  type: ArticleType,
}

declare interface IIssueAuthor {
  id: number,
  firstName: string,
  lastName: string,
  description: string,
}
