import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EdFooterComponent } from './ed-footer/ed-footer.component';
import { RouterOutlet } from '@angular/router';
import { EdSidebarComponent } from './ed-sidebar/ed-sidebar.component';
import { EdHeaderComponent } from './ed-header/ed-header.component';

@Component({
    selector: 'app-employers-dashboard',
    templateUrl: './employers-dashboard.component.html',
    styleUrls: ['./employers-dashboard.component.scss'],
    standalone: true,
    imports: [EdHeaderComponent, EdSidebarComponent, RouterOutlet, EdFooterComponent]
})
export class EmployersDashboardComponent {

    title = 'Employers Dashboard - Jove';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}