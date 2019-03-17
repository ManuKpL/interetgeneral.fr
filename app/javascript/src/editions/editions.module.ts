import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule }   from '@angular/http';

import * as components from './components';
import * as pages      from './pages';
import * as services   from './services';

const componentsList = Object.values(components);
const pagesList      = Object.values(pages);
const servicesList   = Object.values(services);

@NgModule({
  declarations: [...pagesList, ...componentsList],
  exports     : [...pagesList],
  imports     : [CommonModule, HttpModule],
  providers   : [...servicesList]
})
export default class EditionsModule { }
