import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private loginService : LoginService, private router: Router) { }

  canActivate() {
    if (this.loginService.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/login']);
    console.log('login');

    return false;
  }
}
