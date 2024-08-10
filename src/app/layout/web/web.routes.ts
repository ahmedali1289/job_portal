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
      {
        path: '',
        loadChildren: () =>
          import('../../components/pages/home-demo-one/home.routes').then(
            (m) => m.routes
          ),
      },
      {
        path: 'about-us',
        loadChildren: () =>
          import('../../components/pages/about-page/about.routes').then(
            (m) => m.routes
          ),
      },
      {
        path: 'pricing',
        loadChildren: () =>
          import('../../components/pages/pricing-page/pricing.routes').then(
            (m) => m.routes
          ),
      },
      {
        path: 'jobs',
        loadChildren: () =>
          import('../../components/pages/jobs-listing-page/jobs.routes').then(
            (m) => m.routes
          ),
      },
      {
        path: 'faq',
        loadChildren: () =>
          import('../../components/pages/faq-page/faq.routes').then(
            (m) => m.routes
          ),
      },
      {
        path: 'privacy-policy',
        loadChildren: () =>
          import(
            '../../components/pages/privacy-policy-page/privacy-policy.routes'
          ).then((m) => m.routes),
      },
      {
        path: 'terms-conditions',
        loadChildren: () =>
          import(
            '../../components/pages/terms-conditions-page/terms-conditions.routes'
          ).then((m) => m.routes),
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('../../components/pages/blog-page/blog.routes').then(
            (m) => m.routes
          ),
      },
      {
        path: 'contact-us',
        loadChildren: () =>
          import('../../components/pages/contact-page/contact-us.routes').then(
            (m) => m.routes
          ),
      },
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
