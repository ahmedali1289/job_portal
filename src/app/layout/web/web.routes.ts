import { Routes } from '@angular/router';
import { CandidatesDashboardComponent } from 'src/app/components/candidates-dashboard/candidates-dashboard.component';
import { NotFoundComponent } from 'src/app/components/common/not-found/not-found.component';
import { EmployersDashboardComponent } from 'src/app/components/employers-dashboard/employers-dashboard.component';
import { AboutPageComponent } from 'src/app/components/pages/about-page/about-page.component';
import { BlogPageComponent } from 'src/app/components/pages/blog-page/blog-page.component';
import { ContactPageComponent } from 'src/app/components/pages/contact-page/contact-page.component';
import { FaqPageComponent } from 'src/app/components/pages/faq-page/faq-page.component';
import { HomeDemoOneComponent } from 'src/app/components/pages/home-demo-one/home-demo-one.component';
import { JobsListingPageComponent } from 'src/app/components/pages/jobs-listing-page/jobs-listing-page.component';
import { PricingPageComponent } from 'src/app/components/pages/pricing-page/pricing-page.component';
import { PrivacyPolicyPageComponent } from 'src/app/components/pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from 'src/app/components/pages/terms-conditions-page/terms-conditions-page.component';
import { WebComponent } from './web.component';

export const routes: Routes = [
  {
    path: '',
    component: WebComponent,
    children: [
      { path: '', component: HomeDemoOneComponent },
      { path: 'about-us', component: AboutPageComponent },
      { path: 'pricing', component: PricingPageComponent },
      { path: 'jobs', component: JobsListingPageComponent },
      { path: 'faq', component: FaqPageComponent },
      { path: 'privacy-policy', component: PrivacyPolicyPageComponent },
      { path: 'terms-conditions', component: TermsConditionsPageComponent },
      { path: 'blog', component: BlogPageComponent },
      { path: 'contact', component: ContactPageComponent },
    ],
  },
  {
    path: 'dashboard',
    component: EmployersDashboardComponent,
    children: [
      // { path: '', component: EDashboardComponent },
      // { path: 'company-profile', component: EdCompanyProfileComponent },
      // { path: 'post-a-new-job', component: EdPostANewJobComponent },
      // { path: 'manage-jobs', component: EdManageJobsComponent },
      // { path: 'all-applicants', component: EdAllApplicantsComponent },
      // { path: 'resumes', component: EdResumesComponent },
      // { path: 'message', component: EdMessageComponent },
      // { path: 'change-password', component: EdChangePasswordComponent },
    ],
  },
  {
    path: 'candidates-dashboard',
    component: CandidatesDashboardComponent,
    children: [
      // { path: '', component: CDashboardComponent },
      // { path: 'my-profile', component: CdProfileComponent },
      // { path: 'resume', component: CdResumeComponent },
      // { path: 'bookmarks', component: CdBookmarksComponent },
      // { path: 'applied-jobs', component: CdAppliedJobsComponent },
      // { path: 'alert-jobs', component: CdAlertJobsComponent },
      // { path: 'message', component: CdMessageComponent },
      // { path: 'change-password', component: CdChangePasswordComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
