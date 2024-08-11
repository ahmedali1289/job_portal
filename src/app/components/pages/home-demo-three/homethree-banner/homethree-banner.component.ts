import { AsyncPipe, NgClass, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ResizeService } from 'src/app/services/resize.service';

@Component({
  imports: [NgClass, AsyncPipe, NgOptimizedImage],
  selector: 'app-homethree-banner',
  templateUrl: './homethree-banner.component.html',
  styleUrls: ['./homethree-banner.component.scss'],
  standalone: true,
})
export class HomethreeBannerComponent {
  constructor(public resize: ResizeService) {}
}
