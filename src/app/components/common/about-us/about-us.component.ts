import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.scss'],
    standalone: true,
    imports: [NgClass, NgIf]
})
export class AboutUsComponent {

    constructor(
        public router: Router
    ) { }

}