declare interface IArticle {
  id:      string;
  type:    string;
  title:   string;
  lead:    string;
  content: string;
  author:  IIssueAuthor;
}
