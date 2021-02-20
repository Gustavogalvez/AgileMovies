import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataSharedService {

  header!: HTMLElement;
  get heightHeader(): number {
    return this.header?.clientHeight || 0;
  }

  user!: User;

  nav!: MatSidenav;

  constructor() { }
}
