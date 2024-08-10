import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    standalone: true,
    imports: [NgClass, RouterLink]
})
export class BlogComponent {

    constructor(
        public router: Router
    ) { }

}