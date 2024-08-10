import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.scss'],
    standalone: true,
    imports: [NgClass, RouterLink]
})
export class FeaturesComponent {

    constructor(
        public router: Router
    ) { }

}