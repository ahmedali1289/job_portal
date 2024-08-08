import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { FooterComponent } from '../../common/footer/footer.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';

@Component({
    selector: 'app-categories-page',
    templateUrl: './categories-page.component.html',
    styleUrls: ['./categories-page.component.scss'],
    standalone: true,
    imports: [NavbarComponent, RouterLink, SubscribeComponent, FooterComponent, NgxScrollTopModule]
})
export class CategoriesPageComponent {

    title = 'Categories - Jove';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}