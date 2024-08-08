import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { FooterComponent } from '../../common/footer/footer.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { DownloadAppComponent } from '../../common/download-app/download-app.component';
import { PricingComponent } from '../../common/pricing/pricing.component';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';

@Component({
    selector: 'app-pricing-page',
    templateUrl: './pricing-page.component.html',
    styleUrls: ['./pricing-page.component.scss'],
    standalone: true,
    imports: [NavbarComponent, RouterLink, PricingComponent, DownloadAppComponent, SubscribeComponent, FooterComponent, NgxScrollTopModule]
})
export class PricingPageComponent {

    title = 'Pricing - Jove';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}