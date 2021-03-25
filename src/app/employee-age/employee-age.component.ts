import { AfterViewInit, Component, OnInit , ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
import { catchError, tap } from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

export interface IAgeBetween {
  EmployeeName:string,
  EmployeeDOB:string
  EmployeeSalary:String
}


@Component({
  selector: 'app-employee-age',
  templateUrl: './employee-age.component.html',
  styleUrls: ['./employee-age.component.scss']
})
export class EmployeeAgeComponent implements OnInit {


  private AgeBetweenList:  IAgeBetween[] = [];
  displayedColumns: string[] = ['employeeName' , 'employeeDOB' ,   'employeeSalary'];
  dataSource: MatTableDataSource<IAgeBetween> = new MatTableDataSource();
  
  @ViewChild(MatSort , {static: false}) 
  sort:any;
  
  @ViewChild(MatPaginator) 
  paginator: any;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(private http: HttpClient) { }

  ngAfterViewInit() {
  
    let params: HttpParams = new HttpParams();
    let headers: HttpHeaders = new HttpHeaders();
    
    const httpOptions = {
      headers: headers,
      params: params
    };
   
    this.http.get<IAgeBetween>("https://localhost:44371/DataProvider/EmployeeAgingBetween", httpOptions).
      pipe(tap(f => {   }), catchError((e, a) => {   return [[]] }))
      .subscribe(a => { 
           this.AgeBetweenList = a as IAgeBetween[];  
           this.dataSource = new MatTableDataSource(this.AgeBetweenList);
           this.dataSource.sort = this.sort;
           this.dataSource.paginator = this.paginator;
           console.log(this.AgeBetweenList);

          });
  }


  ngOnInit(): void {
  }

}
