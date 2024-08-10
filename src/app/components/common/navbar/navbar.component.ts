import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: true,
    imports: [NgClass, RouterLink, RouterLinkActive]
})
export class NavbarComponent {

    // Navbar Sticky
    isSticky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }

    constructor(
        public router: Router
    ) { }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

	// Tabs 1
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

	// Tabs 2
    currentInnerTab = 'innerTab1';
    switchInnerTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentInnerTab = tab;
    }

    // Modal Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}