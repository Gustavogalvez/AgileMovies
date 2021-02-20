import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent, HttpHandler,



  HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { Payload } from '../models/login.model';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  get payLoad(): Payload {
    return this.loginService.loginData?.payload;
  }

  constructor(private router: Router, private loginService: LoginService, private _snackBar: MatSnackBar, private http: HttpClient) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this.payLoad?.token) {
      req = this.addToken(req, this.payLoad.token);
    }
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {

        switch (err.error?.statusCode) {
          case 401:
            if (err.error?.message === 'jwt expired') {
              return this.handle401Error(req, next);
            }
            break;
          default:
            this.errorDefault(err);
            break;
        }

        return throwError( err );

      })
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.loginService.refreshToken().pipe(
        switchMap((data: any) => {
          console.log(data);

          this.isRefreshing = false;
          this.refreshTokenSubject.next(data?.data?.payload.token);
          return next.handle(this.addToken(request, data?.data?.payload.token));
        })
      );
    } else {
      return this.refreshTokenSubject.pipe(
        filter((token) => token != null),
        take(1),
        switchMap((data) => {
          return next.handle(this.addToken(request, data?.data?.payload.token));
        })
      );
    }
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  errorDefault(err: HttpErrorResponse) {
    console.warn(err);
    let msg = err.error.message;
    if (typeof msg === 'object' ) {
      msg = err.error?.message.join(', ');
    }
    this._snackBar.open('Error en: ' + msg, 'close', {
      duration: 3000,
    });
  }
}
