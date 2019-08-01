import {Component} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <img [src]="imageUrl"/>
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
    <table>
      <tr>
        <td>R1L1</td>
        <td>R1L2</td>
      </tr>
      <tr>
        <td>R2L1</td>
        <td>R2L2</td>
      </tr>
    </table>
    <div (click)="onDivClicked()">
      <button (click)="onSave($event)" class="btn btn-primary" [class.active]="isActive"
              [style.backgroundColor]="isActive ? 'blue' : 'black'">Save
      </button>
    </div>
    <input #email (keyup.enter)="onKeyUp(email.value)"/>
    <input [value]="email2" (keyup.enter)="onKeyUp2()"/>
  `
})
export class CoursesComponent {
  title = 'List of courses';
  // imageUrl = 'https://buddy.works/blog/thumbnails/angular-cli-cover.png';
  isActive = false;
  courses;
  email2 = 'test@test.com';
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  onSave($event) {
    $event.stopPropagation(); // so the onDivClicked is not called
    console.log('Button was clicked');
  }

  onDivClicked() {
    console.log('Div was clicked');
  }

  onKeyUp(email) {
    console.log(email);
  }

  onKeyUp2() {
    console.log(this.email2);
  }
}
