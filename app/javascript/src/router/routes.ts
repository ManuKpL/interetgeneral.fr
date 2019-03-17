import { Routes } from '@angular/router';

import LandingComponent           from '../home/pages/landing/landing.component';
import {EditionsPage, IssuePage, ArticlePage } from '../editions/pages';
import InfographiesComponent      from '../infographies/pages/infographies/infographies.component';

const appRoutes: Routes = [
  { path: '',             component: LandingComponent      },
  { path: 'editions',     component: EditionsPage     },
  { path: 'editions/:editionId', component: IssuePage        },
  { path: 'editions/:editionId/articles/:articleId', component: ArticlePage        },
  { path: 'infographies', component: InfographiesComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

export default appRoutes;
