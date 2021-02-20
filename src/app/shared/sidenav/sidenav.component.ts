import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DataSharedService } from 'src/app/services/data-shared.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterViewInit {
  @Input() heightHeader = 0;

  @ViewChild('nav') nav!: MatSidenav;

  constructor(public utils: UtilsService, private dataSharedService: DataSharedService) {
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.utils.desktop) {
      this.nav.open();
      this.dataSharedService.nav = this.nav;
    }
  }

}
