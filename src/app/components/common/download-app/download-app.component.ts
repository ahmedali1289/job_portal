import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-download-app',
    templateUrl: './download-app.component.html',
    styleUrls: ['./download-app.component.scss'],
    standalone: true,
    imports: [NgClass]
})
export class DownloadAppComponent {

    constructor(
        public router: Router
    ) { }

}