import { Injectable } from '@angular/core';
import { SideNav } from '../shared/sidenav/side-content/sidenav.model';

@Injectable({
  providedIn: 'root'
})
export class NavsService {
  public menu: Array<SideNav> = [
    {
      name: 'Home',
      route: '/home',
      icon: 'home'
    }
  ];

  constructor() { }

  // lógica para agrega un menú
  addNewMenu(sideNav: SideNav, fatherBoardName?: string): void {
    if (!this.findMenu(sideNav)) {
      if (fatherBoardName) {
        let findMenu = this.menu.find(m => m.idx === fatherBoardName);
        if (findMenu) {
          if (!findMenu.childs) {
            findMenu.childs = [];
          }
          findMenu.childs.push(sideNav);
        }
      } else {
        this.menu.push(sideNav);
      }
    }
  }


  // Encuentra un menú
  findMenu(sideNav: SideNav, func?: (sideNav: SideNav, index: number, arraySideNav: SideNav[]) => void): boolean {
    let find = false;
    this.menu.forEach((ruta, index, array) => {
      if (ruta.childs) {
        ruta.childs.forEach((r: { name: any; }, indexChild: number, arrayChild: any[]) => {
          if (r.name === sideNav.name) {
            find = true;
            if (func) {
              func(r, indexChild, arrayChild);
            }
          }
        })
      }
      if (ruta.name === sideNav.name) {
        find = true;
        if (func) {
          func(ruta, index, array);
        }
      }
    });
    return find;
  }
}
