import { Routes } from '@angular/router';

import LandingComponent      from '../home/pages/landing/landing.component';
import EditionsComponent     from '../editions/pages/editions/editions.component';
import InfographiesComponent from '../infographies/pages/infographies/infographies.component';
import IssueComponent        from '../editions/pages/issue/issue.component';

const appRoutes: Routes = [
  { path: '',             component: LandingComponent      },
  { path: 'editions',     component: EditionsComponent     },
  { path: 'editions/:id', component: IssueComponent        },
  { path: 'infographies', component: InfographiesComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

export default appRoutes;
