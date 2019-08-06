import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pipe',
  styleUrls: ['./my-pipe.css'],
  template: `
    <input [(ngModel)]="text"/>
    <div>{{ text | myPipe }}</div>
  `
})
export class MyPipeComponent implements OnInit {
  text;
  constructor() { }

  ngOnInit() {
  }

}
