import { Routes } from '@angular/router';

import LandingComponent           from '../home/pages/landing/landing.component';
import {EditionsPage, IssuePage } from '../editions/pages';
import InfographiesComponent      from '../infographies/pages/infographies/infographies.component';

const appRoutes: Routes = [
  { path: '',             component: LandingComponent      },
  { path: 'editions',     component: EditionsPage     },
  { path: 'editions/:id', component: IssuePage        },
  { path: 'infographies', component: InfographiesComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

export default appRoutes;
