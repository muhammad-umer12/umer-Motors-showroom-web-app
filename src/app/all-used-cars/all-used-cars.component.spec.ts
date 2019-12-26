import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUsedCarsComponent } from './all-used-cars.component';

describe('AllUsedCarsComponent', () => {
  let component: AllUsedCarsComponent;
  let fixture: ComponentFixture<AllUsedCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllUsedCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUsedCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
