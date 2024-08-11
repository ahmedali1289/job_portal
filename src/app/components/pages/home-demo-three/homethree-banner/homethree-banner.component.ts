import { AsyncPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ResizeService } from 'src/app/services/resize.service';

@Component({
  imports: [NgClass, AsyncPipe],
  selector: 'app-homethree-banner',
  templateUrl: './homethree-banner.component.html',
  styleUrls: ['./homethree-banner.component.scss'],
  standalone: true,
})
export class HomethreeBannerComponent {
  constructor(public resize: ResizeService) {}
}
