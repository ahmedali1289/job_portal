import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-companies',
    templateUrl: './companies.component.html',
    styleUrls: ['./companies.component.scss'],
    standalone: true,
    imports: [NgClass, RouterLink]
})
export class CompaniesComponent {

    constructor(
        public router: Router
    ) { }

}