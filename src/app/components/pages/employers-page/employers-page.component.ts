import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { FooterComponent } from '../../common/footer/footer.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';

@Component({
    selector: 'app-employers-page',
    templateUrl: './employers-page.component.html',
    styleUrls: ['./employers-page.component.scss'],
    standalone: true,
    imports: [NavbarComponent, RouterLink, SubscribeComponent, FooterComponent, NgxScrollTopModule]
})
export class EmployersPageComponent {

    title = 'Employers - Jove';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}