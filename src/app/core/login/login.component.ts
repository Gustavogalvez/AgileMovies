import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    username: '',
    password: ''
  };

  type: 'text' | 'password' = 'password';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.logout();
  }

  login() {
    this.loginService.login(this.user).subscribe(resp => {
      console.log(resp);
    });
  }

  logout() {
    localStorage.removeItem('')
  }

}
