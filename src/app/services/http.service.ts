import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Subject, throwError } from 'rxjs';
import {
  catchError,
  distinctUntilChanged,
  shareReplay,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { toggleAlternateLoader } from '../ngrx/data.action';
import { selectUser } from '../ngrx/data.reducer';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  user$ = this.store.select(selectUser);
  userDetails: any;
  private destroy$ = new Subject<void>();
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private store: Store
  ) {
    this.user$
      .pipe(
        takeUntil(this.destroy$),
        distinctUntilChanged(
          (prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)
        )
      )
      .subscribe((user) => {
        this.userDetails = user;
      });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  get headerToken() {
    const token = this.userDetails?.token;
    return {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`,
      }),
    };
  }
  loaderPost(link: string, data: any, token: boolean, toaster: boolean) {
    LoaderService.loader.next(true);
    return this.http
      .post(
        environment.apiUrl + link,
        data,
        token ? this.headerToken : this.header
      )
      .pipe(
        tap((res: any) => {
          if (toaster) {
            if (res?.userMessage) {
              this.toastr.success(res.userMessage);
            } else if (res?.successMessage) {
              this.toastr.success(res.successMessage);
            } else if (res?.errorMessage) {
              this.toastr.error(res.errorMessage);
            }
          }
        }),
        catchError((error: HttpErrorResponse) => {
          LoaderService.loader.next(false);
          if (toaster) {
            this.errorShown(error);
          }
          return throwError(error.message || 'Server error');
        })
      );
  }
  loaderGet(
    url: string,
    token: boolean,
    clearCache: boolean,
    toastr: boolean = false
  ) {
    LoaderService.loader.next(true);
    const headers = token ? this.headerToken : this.header;
    return this.http.get(environment.apiUrl + url, headers).pipe(
      shareReplay({ refCount: true }),
      tap((res: any) => {
        if (toastr) {
          this.toastr.success(res?.userMessage || res?.successMessage);
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if (toastr) {
          this.toastr.error(
            error?.error?.userMessage || error?.error?.errorMessage
          );
        }
        LoaderService.loader.next(false);
        this.errorShown(error);
        return throwError(error.message || 'Server error');
      })
    );
  }
  alternateLoaderPost(
    link: string,
    data: any,
    token: boolean,
    toaster: boolean,
    loader: boolean = true
  ) {
    this.store.dispatch(toggleAlternateLoader({ show: true }));
    return this.http
      .post(
        environment.apiUrl + link,
        data,
        token ? this.headerToken : this.header
      )
      .pipe(
        tap((res: any) => {
          if (loader) {
            this.store.dispatch(toggleAlternateLoader({ show: false }));
          }
          if (toaster) {
            if (res?.userMessage) {
              this.toastr.success(res.userMessage);
            } else if (res?.successMessage) {
              this.toastr.success(res.successMessage);
            } else if (res?.errorMessage) {
              this.toastr.error(res.errorMessage);
            }
          }
        }),
        catchError((error: HttpErrorResponse) => {
          this.store.dispatch(toggleAlternateLoader({ show: false }));
          if (toaster) {
            this.errorShown(error);
          }
          return throwError(error || 'Server error');
        })
      );
  }
  alternateLoaderGet(
    url: string,
    token: boolean,
    clearCache: boolean,
    loader: boolean = true,
    toaster: boolean = false
  ) {
    this.store.dispatch(toggleAlternateLoader({ show: true }));
    const headers = token ? this.headerToken : this.header;
    return this.http.get(environment.apiUrl + url, headers).pipe(
      shareReplay({ refCount: true }),
      tap((res: any) => {
        if (loader) {
          this.store.dispatch(toggleAlternateLoader({ show: false }));
        }
        // if (res?.message || res?.messsage) {
        //   this.toastr.success(res?.message ? res?.message : res?.messsage);
        // }
      }),
      catchError((error: HttpErrorResponse) => {
        if (toaster) {
          this.errorShown(error);
        }
        this.store.dispatch(toggleAlternateLoader({ show: false }));
        return throwError(error.message || 'Server error');
      })
    );
  }
  get(url: string, token: boolean, clearCache: boolean) {
    const headers = token ? this.headerToken : this.header;
    return this.http.get(environment.apiUrl + url, headers).pipe(
      shareReplay({ refCount: true }),
      tap((res: any) => {
        // if (res?.message || res?.messsage) {
        //   this.toastr.success(res?.message ? res?.message : res?.messsage);
        // }
      }),
      catchError((error: HttpErrorResponse) => {
        LoaderService.loader.next(false);
        return throwError(error || 'Server error');
      })
    );
  }
  post(link: string, data: any, token: boolean, toaster: boolean) {
    return this.http
      .post(
        environment.apiUrl + link,
        data,
        token ? this.headerToken : this.header
      )
      .pipe(
        tap((res: any) => {
          if (toaster) {
            if (res?.userMessage) {
              this.toastr.success(res.userMessage);
            } else if (res?.successMessage) {
              this.toastr.success(res.successMessage);
            } else if (res?.errorMessage) {
              this.toastr.error(res.errorMessage);
            }
          }
        }),
        catchError((error: HttpErrorResponse) => {
          LoaderService.loader.next(false);
          if (toaster) {
            this.errorShown(error);
          }
          return throwError(error || 'Server error');
        })
      );
  }
  errorShown(error) {
    if (error?.error?.length) {
      error?.error?.map((err: any) => {
        if (err?.userMessage) {
          this.toastr.error(err?.userMessage);
        }
      });
    } else if (error?.error?.userMessage) {
      this.toastr.error(error?.error?.userMessage);
    } else if (error?.error?.errors) {
      for (const key in error?.error?.errors) {
        if (error?.error?.errors[key]?.length) {
          this.toastr.error(error?.error?.errors[key][0]);
        }
      }
    }
  }
}
