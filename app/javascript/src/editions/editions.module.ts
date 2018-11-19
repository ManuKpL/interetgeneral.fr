import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule }   from '@angular/http';

import CoverComponent        from './cover/cover.component';
import EditionsComponent     from './editions.parent/editions.component';
import EditionsResource      from './editions.resource';
import EditionIssueComponent from './issue/issue.component';
import IssueArticleComponent from './article/article.component';

@NgModule({
  bootstrap   : [EditionsComponent],
  declarations: [CoverComponent, EditionIssueComponent, EditionsComponent, IssueArticleComponent],
  exports     : [EditionsComponent],
  imports     : [CommonModule, HttpModule],
  providers   : [EditionsResource]
})
export default class EditionsModule { }
