import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    name: '',
    password: ''
  };

  type: 'text' | 'password' = 'password';

  constructor() { }

  ngOnInit(): void {
  }

}
