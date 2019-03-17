import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector   : 'ig-editions-article',
  styleUrls  : ['./article.page.scss'],
  templateUrl: './article.page.html',
})
export class ArticlePage implements OnInit {

  public articleId: string;
  public editionId: string;

  public constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    this.articleId = params.get('articleId');
    this.editionId = params.get('editionId');
  }
}
