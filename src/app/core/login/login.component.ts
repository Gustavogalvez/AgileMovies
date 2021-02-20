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

  loading: boolean = false;

  type: 'text' | 'password' = 'password';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loading = false;
    this.loginService.logout(); // deslogueo al entrar al login
  }

  login() {
    this.loading = true;
    this.loginService.login(this.user).subscribe(
      () => {},
      () => this.loading = false); // por si ocurre un error, necesito mostrar nuevamente el form
  }

}
