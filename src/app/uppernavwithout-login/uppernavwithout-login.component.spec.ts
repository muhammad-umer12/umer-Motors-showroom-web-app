import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UppernavwithoutLoginComponent } from './uppernavwithout-login.component';

describe('UppernavwithoutLoginComponent', () => {
  let component: UppernavwithoutLoginComponent;
  let fixture: ComponentFixture<UppernavwithoutLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UppernavwithoutLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UppernavwithoutLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
