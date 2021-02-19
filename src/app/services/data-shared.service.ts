import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharedService {

  header!: HTMLElement;
  get heightHeader(): number {
    return this.header?.clientHeight || 0;
  }

  constructor() { }
}
