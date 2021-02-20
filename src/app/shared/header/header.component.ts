import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DataSharedService } from 'src/app/services/data-shared.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() sidenav!: MatSidenav;

  constructor(
    dataShared: DataSharedService,
    public el: ElementRef<HeaderComponent>,
    public loginService: LoginService
  ) {
    dataShared.header = el.nativeElement as any;
  }

  ngOnInit(): void {
  }

}
