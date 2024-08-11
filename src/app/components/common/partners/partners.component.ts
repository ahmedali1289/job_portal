import { Component } from '@angular/core';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { JobGridItemComponent } from '../job-grid-item/job-grid-item.component';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
  standalone: true,
  imports: [CarouselModule, JobGridItemComponent],
})
export class PartnersComponent {}
