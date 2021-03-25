import { AfterViewInit, Component, OnInit , ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
import { catchError, tap } from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

export interface IYoungestEmployee {
  DepartmentName:string,
  EmployeeName:string
  DateOfBirth:String
}


@Component({
  selector: 'app-youngest-employee-department',
  templateUrl: './youngest-employee-department.component.html',
  styleUrls: ['./youngest-employee-department.component.scss']
})
export class YoungestEmployeeDepartmentComponent implements OnInit {

  
private YoungetEmployeeList:  IYoungestEmployee[] = [];
displayedColumns: string[] = ['departmentName' , 'employeeName' ,   'dateOfBirth'];
dataSource: MatTableDataSource<IYoungestEmployee> = new MatTableDataSource();


@ViewChild(MatSort , {static: false}) 
sort:any;

@ViewChild(MatPaginator) 
paginator: any;

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}


ngAfterViewInit() {
  
  let params: HttpParams = new HttpParams();
  let headers: HttpHeaders = new HttpHeaders();
  
  const httpOptions = {
    headers: headers,
    params: params
  };
 
  this.http.get<IYoungestEmployee>("https://localhost:44371/DataProvider/YoungestEmployeeList", httpOptions).
    pipe(tap(f => {   }), catchError((e, a) => {   return [[]] }))
    .subscribe(a => { 
         this.YoungetEmployeeList = a as IYoungestEmployee[];  
         this.dataSource = new MatTableDataSource(this.YoungetEmployeeList);
         this.dataSource.sort = this.sort;
         this.dataSource.paginator = this.paginator;
         console.log(this.YoungetEmployeeList);

        });
}
constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
