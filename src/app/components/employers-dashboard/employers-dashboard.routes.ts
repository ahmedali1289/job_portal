import { Routes } from '@angular/router';
import { NotFoundComponent } from 'src/app/components/common/not-found/not-found.component';
import { EmployersDashboardComponent } from 'src/app/components/employers-dashboard/employers-dashboard.component';
import { EDashboardComponent } from './e-dashboard/e-dashboard.component';
import { EdCompanyProfileComponent } from './ed-company-profile/ed-company-profile.component';
import { EdPostANewJobComponent } from './ed-post-a-new-job/ed-post-a-new-job.component';
import { EdManageJobsComponent } from './ed-manage-jobs/ed-manage-jobs.component';
import { EdAllApplicantsComponent } from './ed-all-applicants/ed-all-applicants.component';
import { EdResumesComponent } from './ed-resumes/ed-resumes.component';
import { EdMessageComponent } from './ed-message/ed-message.component';
import { EdChangePasswordComponent } from './ed-change-password/ed-change-password.component';

export const routes: Routes = [
  {
    path: '',
    component: EmployersDashboardComponent,
    children: [
      { path: '', component: EDashboardComponent },
      { path: 'company-profile', component: EdCompanyProfileComponent },
      { path: 'post-a-new-job', component: EdPostANewJobComponent },
      { path: 'manage-jobs', component: EdManageJobsComponent },
      { path: 'all-applicants', component: EdAllApplicantsComponent },
      { path: 'resumes', component: EdResumesComponent },
      { path: 'message', component: EdMessageComponent },
      { path: 'change-password', component: EdChangePasswordComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
