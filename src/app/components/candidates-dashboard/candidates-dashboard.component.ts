import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CdFooterComponent } from './cd-footer/cd-footer.component';
import { RouterOutlet } from '@angular/router';
import { CdSidebarComponent } from './cd-sidebar/cd-sidebar.component';
import { CdHeaderComponent } from './cd-header/cd-header.component';

@Component({
    selector: 'app-candidates-dashboard',
    templateUrl: './candidates-dashboard.component.html',
    styleUrls: ['./candidates-dashboard.component.scss'],
    standalone: true,
    imports: [CdHeaderComponent, CdSidebarComponent, RouterOutlet, CdFooterComponent]
})
export class CandidatesDashboardComponent {

    title = 'Candidates Dashboard - Jove';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}