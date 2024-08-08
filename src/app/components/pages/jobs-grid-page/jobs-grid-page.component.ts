import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { FooterComponent } from '../../common/footer/footer.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { JobsSidebarComponent } from '../../common/jobs-sidebar/jobs-sidebar.component';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';

@Component({
    selector: 'app-jobs-grid-page',
    templateUrl: './jobs-grid-page.component.html',
    styleUrls: ['./jobs-grid-page.component.scss'],
    standalone: true,
    imports: [NavbarComponent, RouterLink, JobsSidebarComponent, SubscribeComponent, FooterComponent, NgxScrollTopModule]
})
export class JobsGridPageComponent {

    title = 'Jobs Grid - Jove';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}