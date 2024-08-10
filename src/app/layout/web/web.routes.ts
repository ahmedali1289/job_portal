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
import { JobDetailsPageComponent } from 'src/app/components/pages/job-details-page/job-details-page.component';

export const routes: Routes = [
  {
    path: '',
    component: WebComponent,
    children: [
      { path: '', component: HomeDemoOneComponent },
      { path: 'about-us', component: AboutPageComponent },
      { path: 'pricing', component: PricingPageComponent },
      { path: 'jobs', component: JobsListingPageComponent },
      { path: 'job-details', component: JobDetailsPageComponent },
      { path: 'faq', component: FaqPageComponent },
      { path: 'privacy-policy', component: PrivacyPolicyPageComponent },
      { path: 'terms-conditions', component: TermsConditionsPageComponent },
      { path: 'blog', component: BlogPageComponent },
      { path: 'contact', component: ContactPageComponent },
    ],
  },
  {
    path: 'employee-dashboard',
    loadChildren: () =>
      import(
        '../../components/employers-dashboard/employers-dashboard.routes'
      ).then((m) => m.routes),
  },
  {
    path: 'candidates-dashboard',
    loadChildren: () =>
      import(
        '../../components/candidates-dashboard/candidate-dashboard.routes'
      ).then((m) => m.routes),
  },
  { path: '**', component: NotFoundComponent },
];
