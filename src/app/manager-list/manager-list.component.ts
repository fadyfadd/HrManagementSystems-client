import { AfterViewInit, Component, OnInit , ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
import { catchError, tap } from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';



export interface IManagerList {
  ManagerName:string,
  EmployeeName:string
}

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.scss']
})


export class ManagerListComponent implements OnInit {
   
  @ViewChild(MatSort , {static: false}) 
    sort:any;
    
  @ViewChild(MatPaginator) 
    paginator: any;


  private ManagerList:  IManagerList[] = [];
  displayedColumns: string[] = ['departmentName' , 'managerName'];
  dataSource: MatTableDataSource<IManagerList> = new MatTableDataSource();
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private http: HttpClient) { 


  }

  ngAfterViewInit() {
  
    let params: HttpParams = new HttpParams();
    let headers: HttpHeaders = new HttpHeaders();
    
    const httpOptions = {
      headers: headers,
      params: params
    };
   
    this.http.get<IManagerList>("https://localhost:44371/DataProvider/managerlist", httpOptions).
      pipe(tap(f => {   }), catchError((e, a) => {   return [[]] }))
      .subscribe(a => { 
           this.ManagerList = a as IManagerList[];  
           this.dataSource = new MatTableDataSource(this.ManagerList);
           this.dataSource.sort = this.sort;
           this.dataSource.paginator = this.paginator;

          });
  }

  ngOnInit(): void {

   
     
     
  }

}
