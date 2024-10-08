import { Component } from '@angular/core';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-jobs-by-location',
    templateUrl: './jobs-by-location.component.html',
    styleUrls: ['./jobs-by-location.component.scss'],
    standalone: true,
    imports: [CarouselModule, RouterLink]
})
export class JobsByLocationComponent {

    jobsByLocationSlides: OwlOptions = {
		nav: true,
		margin: 25,
		loop: true,
		dots: false,
		autoplay: false,
		autoplayHoverPause: true,
		navText: [
			"<i class='ri-arrow-left-line'></i>",
			"<i class='ri-arrow-right-line'></i>",
		],
		responsive: {
			0: {
				items: 1
			},
			515: {
				items: 2
			},
			695: {
				items: 2
			},
			935: {
				items: 3
			},
			1200: {
				items: 5
			}
		}
    }

}