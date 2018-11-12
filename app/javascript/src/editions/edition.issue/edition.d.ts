declare interface IEditionIssue {
  id: number,
  editionId: string,
  number: number,
  date: Date,
  title: string,
  shortDesc: string,
  shopPath: string,
  articles: IArticle[],
}

declare interface IArticle {
  id: number,
  title: string,
  author: IAuthor,
  lead: string,
  content: string,
  type: ArticleType,
}

declare interface IAuthor {
  id: number,
  firstName: string,
  lastName: string,
  description: string,
}

declare enum ArticleType {
  ARTICLE,
  INFOGRAPHIC,
  INTERVIEW,
}
