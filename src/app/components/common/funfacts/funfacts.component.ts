import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-funfacts',
    templateUrl: './funfacts.component.html',
    styleUrls: ['./funfacts.component.scss'],
    standalone: true,
    imports: [NgClass]
})
export class FunfactsComponent {

    constructor(
        public router: Router
    ) { }

}