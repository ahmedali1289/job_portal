import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
    selector: 'app-download-app',
    templateUrl: './download-app.component.html',
    styleUrls: ['./download-app.component.scss'],
    standalone: true,
    imports: [NgClass, NgIf]
})
export class DownloadAppComponent {

    constructor(
        public router: Router
    ) { }

}