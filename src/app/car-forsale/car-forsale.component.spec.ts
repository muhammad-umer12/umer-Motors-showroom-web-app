import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarForsaleComponent } from './car-forsale.component';

describe('CarForsaleComponent', () => {
  let component: CarForsaleComponent;
  let fixture: ComponentFixture<CarForsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarForsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarForsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
