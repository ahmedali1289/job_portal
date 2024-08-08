import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { FooterComponent } from '../../common/footer/footer.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { TalentedExpertsComponent } from '../../common/talented-experts/talented-experts.component';
import { JobsByLocationComponent } from '../../common/jobs-by-location/jobs-by-location.component';
import { FaqComponent } from '../../common/faq/faq.component';
import { DownloadAppComponent } from '../../common/download-app/download-app.component';
import { HowJoveWorksComponent } from '../../common/how-jove-works/how-jove-works.component';
import { GetHiredByTopCompaniesComponent } from '../../common/get-hired-by-top-companies/get-hired-by-top-companies.component';
import { TestimonialsComponent } from '../../common/testimonials/testimonials.component';
import { LeadingCompanyComponent } from '../../common/leading-company/leading-company.component';
import { CategoriesComponent } from '../../common/categories/categories.component';
import { AboutUsComponent } from '../../common/about-us/about-us.component';
import { PopularJobsComponent } from '../../common/popular-jobs/popular-jobs.component';
import { PartnersComponent } from '../../common/partners/partners.component';
import { HomethreeBannerComponent } from './homethree-banner/homethree-banner.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';

@Component({
    selector: 'app-home-demo-three',
    templateUrl: './home-demo-three.component.html',
    styleUrls: ['./home-demo-three.component.scss'],
    standalone: true,
    imports: [NavbarComponent, HomethreeBannerComponent, PartnersComponent, PopularJobsComponent, AboutUsComponent, CategoriesComponent, LeadingCompanyComponent, TestimonialsComponent, GetHiredByTopCompaniesComponent, HowJoveWorksComponent, DownloadAppComponent, FaqComponent, JobsByLocationComponent, TalentedExpertsComponent, BlogComponent, SubscribeComponent, FooterComponent, NgxScrollTopModule]
})
export class HomeDemoThreeComponent {

    title = 'Home Demo - 3 - Jove';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}