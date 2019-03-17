import { Component, Input, OnInit } from '@angular/core';
import { ArticleType } from '../../enums';

@Component({
  selector   : 'ig-issue-article',
  styleUrls  : ['./article.component.scss'],
  templateUrl: './article.component.html',
})
export class IssueArticleComponent implements OnInit {

  @Input() public article: IIssueArticle;
  public articleType: ArticleType;

  public ngOnInit() {
    this.articleType = ArticleType[this.article.type];
  }
}
