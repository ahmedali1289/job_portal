import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { FooterComponent } from '../../common/footer/footer.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { DownloadAppComponent } from '../../common/download-app/download-app.component';
import { FaqComponent } from '../../common/faq/faq.component';
import { TalentedExpertsComponent } from '../../common/talented-experts/talented-experts.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { TestimonialsComponent } from '../../common/testimonials/testimonials.component';
import { HowJoveWorksComponent } from '../../common/how-jove-works/how-jove-works.component';
import { WhyChooseUsComponent } from '../../common/why-choose-us/why-choose-us.component';
import { PopularJobsComponent } from '../../common/popular-jobs/popular-jobs.component';
import { CompaniesComponent } from '../../common/companies/companies.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { CategoriesComponent } from '../../common/categories/categories.component';
import { AboutUsComponent } from '../../common/about-us/about-us.component';
import { HometwoBannerComponent } from './hometwo-banner/hometwo-banner.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';

@Component({
    selector: 'app-home-demo-two',
    templateUrl: './home-demo-two.component.html',
    styleUrls: ['./home-demo-two.component.scss'],
    standalone: true,
    imports: [NavbarComponent, HometwoBannerComponent, AboutUsComponent, CategoriesComponent, FeaturesComponent, CompaniesComponent, PopularJobsComponent, WhyChooseUsComponent, HowJoveWorksComponent, TestimonialsComponent, FunfactsComponent, TalentedExpertsComponent, FaqComponent, DownloadAppComponent, BlogComponent, SubscribeComponent, FooterComponent, NgxScrollTopModule]
})
export class HomeDemoTwoComponent {

    title = 'Home Demo - 2 - Jove';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}