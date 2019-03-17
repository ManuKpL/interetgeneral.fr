import { Component, Input, OnInit } from '@angular/core';
import { ArticleType } from './article-type.enum';

@Component({
  selector   : 'ig-issue-article',
  styleUrls  : ['./article.styles.scss'],
  templateUrl: './article.tempalte.html',
})
export default class IssueArticleComponent implements OnInit {

  @Input() public article: IIssueArticle;
  public articleType: ArticleType;

  public ngOnInit() {
    this.articleType = ArticleType[this.article.type];
  }
}
