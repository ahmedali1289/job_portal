import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from 'src/app/components/common/footer/footer.component';
import { NavbarComponent } from 'src/app/components/common/navbar/navbar.component';

@Component({
  selector: 'app-web',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './web.component.html',
  styleUrl: './web.component.scss',
})
export class WebComponent {}
