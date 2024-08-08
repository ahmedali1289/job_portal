import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-ed-header',
    templateUrl: './ed-header.component.html',
    styleUrls: ['./ed-header.component.scss'],
    standalone: true,
    imports: [RouterLink, RouterLinkActive]
})
export class EdHeaderComponent {

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