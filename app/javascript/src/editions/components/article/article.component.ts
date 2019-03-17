import { Component, Input, OnInit } from '@angular/core';
import { ArticleType } from '../../enums';

@Component({
  selector   : 'ig-issue-article',
  styleUrls  : ['./article.component.scss'],
  templateUrl: './article.component.html',
})
export class IssueArticleComponent implements OnInit {

  @Input() public article: IIssueArticle;
  @Input() public editionId: string;

  public articleType: ArticleType;
  public targetPath:  string;

  public ngOnInit() {
    this.articleType = ArticleType[this.article.type];
    this.targetPath  = `/editions/${this.editionId}/articles/${this.article.articleId}`;
  }
}
