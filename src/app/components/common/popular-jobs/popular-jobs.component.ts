import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
    selector: 'app-popular-jobs',
    templateUrl: './popular-jobs.component.html',
    styleUrls: ['./popular-jobs.component.scss'],
    standalone: true,
    imports: [NgClass, RouterLink, NgIf]
})
export class PopularJobsComponent {

    constructor(
        public router: Router
    ) { }

}