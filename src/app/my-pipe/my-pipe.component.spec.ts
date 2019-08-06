import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPipeComponent } from './my-pipe.component';

describe('MyPipeComponent', () => {
  let component: MyPipeComponent;
  let fixture: ComponentFixture<MyPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
