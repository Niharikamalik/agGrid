import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ColDef,
  GetRowIdFunc,
  GetRowIdParams,
  ModuleRegistry,
} from 'ag-grid-community'; // Column Definition Type Interface

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css'],
})
export class AgGridComponent implements OnInit {
  userList: any[] = [];
  rowSelection: 'Single' | 'multiple' = 'multiple';

  colDefs: ColDef[] = [
    // { headerName: 'Row ID', valueGetter: 'node.id' },
    {
      field: 'id',
      headerName: 'userId',
      cellRenderer: (item: any) => {
        return 'Emp-' + item.value;
      },
      filter: true,
    },
    { field: 'name', headerName: 'Name', filter: true, sort:'asc' },
    { field: 'username', headerName: 'User Name' },
    { field: 'email', headerName: 'E-mail', editable: true },
  ];

  defaultColDef = {
    flex: 1,
    minWidth: 100,
    sortable: false,
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res: any) => {
        this.userList = res;
      });
  }
  // public getRowId: GetRowIdFunc = (params: GetRowIdParams) => params.data.id;
}
