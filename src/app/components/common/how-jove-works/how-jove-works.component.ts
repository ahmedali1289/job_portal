import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-how-jove-works',
    templateUrl: './how-jove-works.component.html',
    styleUrls: ['./how-jove-works.component.scss'],
    standalone: true,
    imports: [NgClass]
})
export class HowJoveWorksComponent {

    constructor(
        public router: Router
    ) { }

}