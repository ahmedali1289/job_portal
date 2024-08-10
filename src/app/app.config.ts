import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  provideRouter,
  withInMemoryScrolling,
  withPreloading,
} from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { ToastrModule } from 'ngx-toastr';
import { routes } from './app.routes';
import { HttpService } from './services/http.service';
import { LoaderService } from './services/loader.service';
import { userReducer } from './ngrx/data.reducer';
import { ResizeService } from './services/resize.service';
const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
};
const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      inMemoryScrollingFeature,
      withPreloading(QuicklinkStrategy)
    ),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    ResizeService,
    HttpService,
    LoaderService,
    importProvidersFrom(
      QuicklinkModule,
      StoreModule.forRoot({
        user: userReducer,
      }),
      ToastrModule.forRoot({
        timeOut: 10000,
        positionClass: 'toast-bottom-left',
        maxOpened: 1,
        autoDismiss: true,
        preventDuplicates: true,
        includeTitleDuplicates: true,
      })
    ),
  ],
};
