import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-jobs-sidebar',
    templateUrl: './jobs-sidebar.component.html',
    styleUrls: ['./jobs-sidebar.component.scss'],
    standalone: true,
    imports: [NgIf]
})
export class JobsSidebarComponent {

    constructor(
        public router: Router
    ) { }

}