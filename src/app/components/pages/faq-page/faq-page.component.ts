import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { FooterComponent } from '../../common/footer/footer.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { DownloadAppComponent } from '../../common/download-app/download-app.component';
import { FaqComponent } from '../../common/faq/faq.component';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';

@Component({
    selector: 'app-faq-page',
    templateUrl: './faq-page.component.html',
    styleUrls: ['./faq-page.component.scss'],
    standalone: true,
    imports: [NavbarComponent, RouterLink, FaqComponent, DownloadAppComponent, SubscribeComponent, FooterComponent, NgxScrollTopModule]
})
export class FaqPageComponent {

    title = 'Frequently Asked Questions - Jove';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}