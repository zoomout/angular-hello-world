import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-favorite',
  styleUrls: ['./favorite.component.css'],
  template: `
      <span (click)="clickEvent()" [ngClass]="red ? 'my-red' : 'my-black'">Instead of star!</span>
  `
})
export class FavoriteComponent implements OnInit {
  red = false;
  constructor() {
  }
  ngOnInit() {
  }
  clickEvent() {
    this.red = !this.red;
  }
}
