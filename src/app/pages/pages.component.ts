import { Component } from '@angular/core';
import { DataSharedService } from '../services/data-shared.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  constructor(public dataShared: DataSharedService) { }
}
