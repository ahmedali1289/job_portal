import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-jobs-sidebar',
    templateUrl: './jobs-sidebar.component.html',
    styleUrls: ['./jobs-sidebar.component.scss'],
    standalone: true,
    imports: []
})
export class JobsSidebarComponent {

    constructor(
        public router: Router
    ) { }

}