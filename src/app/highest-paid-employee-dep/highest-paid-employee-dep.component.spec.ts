import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestPaidEmployeeDepComponent } from './highest-paid-employee-dep.component';

describe('HighestPaidEmployeeDepComponent', () => {
  let component: HighestPaidEmployeeDepComponent;
  let fixture: ComponentFixture<HighestPaidEmployeeDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighestPaidEmployeeDepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighestPaidEmployeeDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
