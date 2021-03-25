import { AfterViewInit, Component, OnInit , ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
import { catchError, tap } from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';


export interface MaxSalaryDep {
  departmentName:string,
  employeeName:string
  salary:String
}

@Component({
  selector: 'app-highest-paid-employee-dep',
  templateUrl: './highest-paid-employee-dep.component.html',
  styleUrls: ['./highest-paid-employee-dep.component.scss']
})
export class HighestPaidEmployeeDepComponent implements OnInit {

  private HighestPaidSalaryList:  MaxSalaryDep[] = [];
  displayedColumns: string[] = ['departmentName' , 'employeeName' ,   'salary'];
  dataSource: MatTableDataSource<MaxSalaryDep> = new MatTableDataSource();
  
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
   
    this.http.get<MaxSalaryDep>("https://localhost:44371/DataProvider/HighestPaidEmployeeList", httpOptions).
      pipe(tap(f => {   }), catchError((e, a) => {   return [[]] }))
      .subscribe(a => { 
           this.HighestPaidSalaryList = a as MaxSalaryDep[];  
           this.dataSource = new MatTableDataSource(this.HighestPaidSalaryList);
           this.dataSource.sort = this.sort;
           this.dataSource.paginator = this.paginator;
           console.log(this.HighestPaidSalaryList);

          });
  }

  constructor(private http: HttpClient) {


  }

  ngOnInit(): void {

  }

}
