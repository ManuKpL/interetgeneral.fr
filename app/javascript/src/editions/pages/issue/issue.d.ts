declare interface IEditionIssue {
  id:         number,
  editionId:  string,
  number:     number,
  date:       Date,
  title:      string,
  shortDesc:  string,
  imgSrc:     string,
  previewSrc: string,
  shopPath:   string,
  color:      string,
  articles:   IIssueArticle[],
}

declare interface IIssueArticle {
  id:        number,
  articleId: string,
  title:     string,
  type:      string,
  author:    IIssueAuthor,
}

declare interface IIssueAuthor {
  id:          number,
  fullName:    string,
  description: string,
}
