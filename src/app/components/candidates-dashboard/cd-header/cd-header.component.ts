import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-cd-header',
    templateUrl: './cd-header.component.html',
    styleUrls: ['./cd-header.component.scss'],
    standalone: true,
    imports: [RouterLink, RouterLinkActive]
})
export class CdHeaderComponent {

    constructor() { }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    classApplied2 = false;
    toggleClass2() {
        this.classApplied2 = !this.classApplied2;
    }

}