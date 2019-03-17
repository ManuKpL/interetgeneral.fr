import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
  selector   : 'ig-editions-article',
  styleUrls  : ['./article.page.scss'],
  templateUrl: './article.page.html',
})
export class ArticlePage implements OnInit {

  public ids$: Observable<{ article: string, edition: string }>;

  public constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    this.ids$ = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          return of({
            article: params.get('articleId'),
            edition: params.get('editionId'),
          });
        })
      );
  }
}
