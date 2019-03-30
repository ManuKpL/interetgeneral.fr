import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule }   from '@angular/http';

import * as components from './components';
import * as pages      from './pages';
import * as services   from './services';
import * as pipes      from './pipes';

const componentsList = Object.values(components);
const pagesList      = Object.values(pages);
const pipesList      = Object.values(pipes);
const servicesList   = Object.values(services);

@NgModule({
  declarations: [...pagesList, ...componentsList, ...pipesList],
  exports     : [...pagesList],
  imports     : [CommonModule, HttpModule],
  providers   : [...servicesList]
})
export default class EditionsModule { }
