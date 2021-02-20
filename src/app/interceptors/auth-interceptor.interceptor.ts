import {
  HttpErrorResponse,
  HttpEvent, HttpHandler,

  HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Payload } from '../models/login.model';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  get payLoad(): Payload {
    return this.loginService.loginData?.payload;
  }

  constructor(private router: Router, private loginService: LoginService, private _snackBar: MatSnackBar) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = this.payLoad?.token;

    if (token) {
        req = req.clone({
            setHeaders: {
                'Authorization': token
            }
        } );
    }
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {

        switch (err.status) {
          case 401:
            break;
          default:
            this.errorDefault(err);
            break;
        }

        return throwError( err );

      })
    );
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
