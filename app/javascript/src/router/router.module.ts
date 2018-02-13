import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import appRoutes from './routes';

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false, useHash: false })],
})
export default class RoutingModule { }
