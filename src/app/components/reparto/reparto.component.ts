import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor.model';

@Component({
  selector: 'app-reparto',
  templateUrl: './reparto.component.html',
  styleUrls: ['./reparto.component.scss']
})
export class RepartoComponent implements OnInit {

  maxActorImages: number = 0;

  @Input() actors!: Actor[];

  constructor() { }

  ngOnInit(): void {
    this.maxActorImages = 0;
  }

  onIntersection({ visible }: { visible: boolean }): void {
    console.log(visible);
    if (visible && (this.actors?.length > this.maxActorImages)) {
      this.maxActorImages = this.maxActorImages+10;
    }
  }

  setTimeoutInfiniteScroll() {
  }

}
