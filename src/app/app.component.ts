import { Component, HostListener } from '@angular/core';
import {
  Router,
  NavigationCancel,
  NavigationEnd,
  RouterOutlet,
} from '@angular/router';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { filter } from 'rxjs/operators';
import * as AOS from 'aos';
import { ResizeService } from './services/resize.service';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    Location,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
  ],
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {
  title = 'Talent Marketplace';
  location: any;
  routerSubscription: any;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.resize.onResize();
  }
  constructor(public resize: ResizeService, public router: Router) {
    AOS.init();
  }

  ngOnInit() {
    this.recallJsFuntions();
  }

  recallJsFuntions() {
    this.routerSubscription = this.router.events
      .pipe(
        filter(
          (event) =>
            event instanceof NavigationEnd || event instanceof NavigationCancel
        )
      )
      .subscribe((event) => {
        this.location = this.router.url;
        if (!(event instanceof NavigationEnd)) {
          return;
        }
        window.scrollTo(0, 0);
      });
  }
}
