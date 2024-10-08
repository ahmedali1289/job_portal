import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [NgClass, NgOptimizedImage, RouterLink],
})
export class FooterComponent {
  constructor(public router: Router) {}
}
