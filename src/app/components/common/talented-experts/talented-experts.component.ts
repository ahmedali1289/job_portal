import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
    selector: 'app-talented-experts',
    templateUrl: './talented-experts.component.html',
    styleUrls: ['./talented-experts.component.scss'],
    standalone: true,
    imports: [NgClass, RouterLink, NgIf]
})
export class TalentedExpertsComponent {

    constructor(
        public router: Router
    ) { }

}