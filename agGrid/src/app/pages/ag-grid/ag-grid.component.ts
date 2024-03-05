import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColumnApi, GridApi } from 'ag-grid-community';
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
export class AgGridComponent {
  userList: any[] = [];
  rowSelection: 'Single' | 'multiple' = 'multiple';

  colDefs = [
    // { headerName: 'Row ID', valueGetter: 'node.id' },
    {
      headerName: ' Employee Table',
      children: [
        {
          field: 'id',
          headerName: 'userId',
          cellRenderer: (item: any) => {
            return 'Emp-' + item.value;
          },
          filter: true,
          suppressMovable: true,
          cellClass: 'suppress-movable-col',
          lockPosition: 'left',
        },
        {
          field: 'name',
          headerName: 'Name',
          filter: 'agTextColumnFilter',
          sort: 'asc',
        },
        { field: 'username', headerName: 'User Name' },
        {
          field: 'email',
          headerName: 'E-mail',
          editable: true,
          resizable: true,
        },
      ],
    },
  ];

  public groupHeaderHeight = 80;
  defaultColDef = {
    flex: 1,
    minWidth: 100,
    sortable: false,
    resizable: false,
    lockPinned: true,
  };
  private gridApi: GridApi<any>;

  constructor(private http: HttpClient) {}

 

  onGridReady(params: { api: GridApi<any> }) {
    this.gridApi = params.api;

    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res: any) => {
        this.userList = res;
      });
  }

  //  column Move
  onEmailFirst() {
    this.gridApi.moveColumns(['email'], 0);
  }

  onEmailLast() {
    this.gridApi.moveColumns(['email'], 3);
  }

  onusernameFirst() {
    this.gridApi.moveColumns(['username'],3);
  }
  // public getRowId: GetRowIdFunc = (params: GetRowIdParams) => params.data.id;
}
