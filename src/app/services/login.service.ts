import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login.model';
import { DataSharedService } from './data-shared.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private get API_URL(): {protocol: string, suffix: string, domain: string} {
    return environment.API_URL;
  }
  get URL(): string {
    return this.API_URL.protocol + this.API_URL.domain + this.API_URL.suffix;
  }

  loginData!: Login;

  nameKeyStorage: string = 'loginData:AgileMovies';

  constructor(private http: HttpClient, private dataShared: DataSharedService, private router: Router) { }

  public isAuthenticated() : Boolean {
    let loginData = localStorage.getItem(this.nameKeyStorage);
    if(loginData && JSON.parse(loginData)){
      return true;
    }
    return false;
  }

  login(body: {username: string, password: string}) {
    return this.http.post(this.URL + '/auth/login', body).pipe(
      map(({data}: any) => {
        this.loginData = data;
        this.dataShared.user = data?.user || {};
        localStorage.setItem(this.nameKeyStorage, JSON.stringify(this.loginData));
        this.router.navigate(['/home']);
      })
    );
  }

  logout() {
    localStorage.removeItem(this.nameKeyStorage);
    this.router.navigate(['/login']);
  }

}
