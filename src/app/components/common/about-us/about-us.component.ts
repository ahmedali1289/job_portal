import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.scss'],
    standalone: true,
    imports: [NgClass]
})
export class AboutUsComponent {

    constructor(
        public router: Router
    ) { }

}