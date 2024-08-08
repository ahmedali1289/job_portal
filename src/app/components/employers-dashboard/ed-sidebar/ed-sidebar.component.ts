import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-ed-sidebar',
    templateUrl: './ed-sidebar.component.html',
    styleUrls: ['./ed-sidebar.component.scss'],
    standalone: true,
    imports: [RouterLink, RouterLinkActive]
})
export class EdSidebarComponent {

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

}