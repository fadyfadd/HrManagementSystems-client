import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ManagerListComponent } from './manager-list/manager-list.component';
import {EmployeeAgeComponent} from './employee-age/employee-age.component';
import { HighestPaidEmployeeDepComponent } from './highest-paid-employee-dep/highest-paid-employee-dep.component'
import { HttpClient } from '@angular/common/http';
import { YoungestEmployeeDepartmentComponent} from './youngest-employee-department/youngest-employee-department.component'

const routes: Routes = [

  { path: '', component: ManagerListComponent, pathMatch: 'full' },
  { path: 'manager-list', component: ManagerListComponent},
  { path: 'highest-paid-employee-dep', component: HighestPaidEmployeeDepComponent},
  { path: 'employee-aging', component: EmployeeAgeComponent},
  { path: 'youngest-emloyee-department', component: YoungestEmployeeDepartmentComponent},
  

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
