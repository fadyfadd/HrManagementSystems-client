import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoungestEmployeeDepartmentComponent } from './youngest-employee-department.component';

describe('YoungestEmployeeDepartmentComponent', () => {
  let component: YoungestEmployeeDepartmentComponent;
  let fixture: ComponentFixture<YoungestEmployeeDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoungestEmployeeDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoungestEmployeeDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
