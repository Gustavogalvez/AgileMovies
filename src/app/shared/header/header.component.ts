import { Component, ElementRef, OnInit } from '@angular/core';
import { DataSharedService } from 'src/app/services/data-shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(dataShared: DataSharedService, el: ElementRef<HeaderComponent>) {
    dataShared.header = el.nativeElement as any;
  }

  ngOnInit(): void {
  }

}
