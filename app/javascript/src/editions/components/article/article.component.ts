import { Component, Input } from '@angular/core';

@Component({
  selector: 'ig-issue-article',
  templateUrl: './article.template.html',
  styleUrls: ['./article.styles.scss'],
})
export default class IssueArticleComponent {
  @Input() article: IIssueArticle;
}
