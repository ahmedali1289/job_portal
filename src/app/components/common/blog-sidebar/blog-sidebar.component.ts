import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog-sidebar',
    templateUrl: './blog-sidebar.component.html',
    styleUrls: ['./blog-sidebar.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class BlogSidebarComponent {

}
