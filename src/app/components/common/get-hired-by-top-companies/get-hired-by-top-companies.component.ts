import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
    selector: 'app-get-hired-by-top-companies',
    templateUrl: './get-hired-by-top-companies.component.html',
    styleUrls: ['./get-hired-by-top-companies.component.scss'],
    standalone: true,
    imports: [NgClass, RouterLink, NgIf]
})
export class GetHiredByTopCompaniesComponent {

    constructor(
        public router: Router
    ) { }

}