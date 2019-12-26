import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCarsComponent } from './new-cars.component';

describe('NewCarsComponent', () => {
  let component: NewCarsComponent;
  let fixture: ComponentFixture<NewCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
