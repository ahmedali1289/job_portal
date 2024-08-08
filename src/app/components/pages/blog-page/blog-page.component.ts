import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { FooterComponent } from '../../common/footer/footer.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { BlogSidebarComponent } from '../../common/blog-sidebar/blog-sidebar.component';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';

@Component({
    selector: 'app-blog-page',
    templateUrl: './blog-page.component.html',
    styleUrls: ['./blog-page.component.scss'],
    standalone: true,
    imports: [NavbarComponent, RouterLink, BlogSidebarComponent, SubscribeComponent, FooterComponent, NgxScrollTopModule]
})
export class BlogPageComponent {

    title = 'Blog Right Sidebar - Jove';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}