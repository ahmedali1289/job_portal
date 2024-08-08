import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { FooterComponent } from '../../common/footer/footer.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { DownloadAppComponent } from '../../common/download-app/download-app.component';
import { TestimonialsComponent } from '../../common/testimonials/testimonials.component';
import { TalentedExpertsComponent } from '../../common/talented-experts/talented-experts.component';
import { HowJoveWorksComponent } from '../../common/how-jove-works/how-jove-works.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { AboutUsComponent } from '../../common/about-us/about-us.component';
import { LeadingCompanyComponent } from '../../common/leading-company/leading-company.component';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';

@Component({
    selector: 'app-about-page',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.scss'],
    standalone: true,
    imports: [NavbarComponent, RouterLink, LeadingCompanyComponent, AboutUsComponent, FunfactsComponent, HowJoveWorksComponent, TalentedExpertsComponent, TestimonialsComponent, DownloadAppComponent, SubscribeComponent, FooterComponent, NgxScrollTopModule]
})
export class AboutPageComponent {

    title = 'About Us - Jove';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}