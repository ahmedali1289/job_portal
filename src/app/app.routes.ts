import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/common/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/web/web.routes').then((m) => m.routes),
  },
  { path: '**', component: NotFoundComponent },
];
