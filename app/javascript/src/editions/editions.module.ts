import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule }   from '@angular/http';

import CoverComponent        from './components/cover/cover.component';
import EditionsComponent     from './pages/editions/editions.component';
import EditionsResource      from './editions.resource';
import IssueComponent        from './pages/issue/issue.component';
import IssueArticleComponent from './components/article/article.component';

@NgModule({
  bootstrap   : [EditionsComponent],
  declarations: [CoverComponent, IssueComponent, EditionsComponent, IssueArticleComponent],
  exports     : [EditionsComponent],
  imports     : [CommonModule, HttpModule],
  providers   : [EditionsResource]
})
export default class EditionsModule { }
