import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAgeComponent } from './employee-age.component';

describe('EmployeeAgeComponent', () => {
  let component: EmployeeAgeComponent;
  let fixture: ComponentFixture<EmployeeAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
