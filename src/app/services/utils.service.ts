import { Injectable } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private breakPoint = [
    '(orientation: portrait)',
    '(orientation: landscape)',
  ];

  public mobile = false;
  public desktop = true;

  constructor(breakpointObserver: BreakpointObserver) {
    const layoutChanges = breakpointObserver.observe(this.breakPoint);
    layoutChanges.subscribe(result => {
      this.mobile = result.breakpoints[this.breakPoint[0]];
      this.desktop = result.breakpoints[this.breakPoint[1]];
    });
  }
}
