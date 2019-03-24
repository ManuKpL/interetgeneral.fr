declare interface IArticle {
  id:           string;
  type:         string;
  title:        string;
  lead:         string;
  content:      string;
  author:       IIssueAuthor;
  illustration: IIllustration;
}

declare interface IIllustration {
  id:         string;
  name:       string;
  imgSrc:     string;
  previewSrc: string;
  position:   IllustrationPosition;
  artistName: string;
}

declare enum IllustrationPosition {
  CENTER = 'center',
  TOP    = 'top',
  BOTTOM = 'bottom',
}
