import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class DataSharedService {

  header!: HTMLElement;
  get heightHeader(): number {
    return this.header?.clientHeight || 0;
  }


  nav!: MatSidenav;

  constructor() { }
}
