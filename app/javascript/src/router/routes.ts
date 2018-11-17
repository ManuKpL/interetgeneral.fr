import { Routes } from '@angular/router';

import LandingComponent      from '../landingPage/landing.parent/landing.component';
import EditionsComponent     from '../editions/editions.parent/editions.component';
import InfographiesComponent from '../infographies/infographies.parent/infographies.component';
import EditionComponent      from '../editions/issue/issue.component';

const appRoutes: Routes = [
  { path: '',             component: LandingComponent      },
  { path: 'editions',     component: EditionsComponent     },
  { path: 'editions/:id', component: EditionComponent      },
  { path: 'infographies', component: InfographiesComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

export default appRoutes;
