import { Routes } from '@angular/router';
import { NotFoundComponent } from 'src/app/components/common/not-found/not-found.component';
import { CandidatesDashboardComponent } from './candidates-dashboard.component';
import { CDashboardComponent } from './c-dashboard/c-dashboard.component';
import { CdProfileComponent } from './cd-profile/cd-profile.component';
import { CdResumeComponent } from './cd-resume/cd-resume.component';
import { CdBookmarksComponent } from './cd-bookmarks/cd-bookmarks.component';
import { CdAppliedJobsComponent } from './cd-applied-jobs/cd-applied-jobs.component';
import { CdAlertJobsComponent } from './cd-alert-jobs/cd-alert-jobs.component';
import { CdMessageComponent } from './cd-message/cd-message.component';
import { CdChangePasswordComponent } from './cd-change-password/cd-change-password.component';

export const routes: Routes = [
  {
    path: '',
    component: CandidatesDashboardComponent,
    children: [
      { path: '', component: CDashboardComponent },
      { path: 'my-profile', component: CdProfileComponent },
      { path: 'resume', component: CdResumeComponent },
      { path: 'bookmarks', component: CdBookmarksComponent },
      { path: 'applied-jobs', component: CdAppliedJobsComponent },
      { path: 'alert-jobs', component: CdAlertJobsComponent },
      { path: 'message', component: CdMessageComponent },
      { path: 'change-password', component: CdChangePasswordComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
