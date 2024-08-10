import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-subscribe',
    templateUrl: './subscribe.component.html',
    styleUrls: ['./subscribe.component.scss'],
    standalone: true,
    imports: [NgClass]
})
export class SubscribeComponent {

    constructor(
        public router: Router
    ) { }

}