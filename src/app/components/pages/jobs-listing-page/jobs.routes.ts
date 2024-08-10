import { Routes } from '@angular/router';
import { JobsListingPageComponent } from './jobs-listing-page.component';

export const routes: Routes = [
  {
    path: '',
    component: JobsListingPageComponent,
  },
  {
    path: 'job-details',
    loadChildren: () =>
      import('../job-details-page/jobs-details.routes').then((m) => m.routes),
  },
];
