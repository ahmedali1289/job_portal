import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { FooterComponent } from '../../common/footer/footer.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { DownloadAppComponent } from '../../common/download-app/download-app.component';
import { FaqComponent } from '../../common/faq/faq.component';
import { GetHiredByTopCompaniesComponent } from '../../common/get-hired-by-top-companies/get-hired-by-top-companies.component';
import { TestimonialsComponent } from '../../common/testimonials/testimonials.component';
import { JobsByLocationComponent } from '../../common/jobs-by-location/jobs-by-location.component';
import { HowJoveWorksComponent } from '../../common/how-jove-works/how-jove-works.component';
import { PopularJobsComponent } from '../../common/popular-jobs/popular-jobs.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { CategoriesComponent } from '../../common/categories/categories.component';
import { CompaniesComponent } from '../../common/companies/companies.component';
import { HomeoneBannerComponent } from './homeone-banner/homeone-banner.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';

@Component({
    selector: 'app-home-demo-one',
    templateUrl: './home-demo-one.component.html',
    styleUrls: ['./home-demo-one.component.scss'],
    standalone: true,
    imports: [NavbarComponent, HomeoneBannerComponent, CompaniesComponent, CategoriesComponent, FeaturesComponent, FunfactsComponent, PopularJobsComponent, HowJoveWorksComponent, JobsByLocationComponent, TestimonialsComponent, GetHiredByTopCompaniesComponent, FaqComponent, DownloadAppComponent, BlogComponent, SubscribeComponent, FooterComponent, NgxScrollTopModule]
})
export class HomeDemoOneComponent {

    title = 'Home Demo - 1 - Jove';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}