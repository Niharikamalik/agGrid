import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { Component } from '@angular/core';
import { ColDef, GridApi, ModuleRegistry } from 'ag-grid-community';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css'],
})
export class RowComponent {
  private gridApi: GridApi;
  private gridColumnApi: any;

  constructor() {}

  columnDefs: ColDef[] = [
    { field: 'make', rowGroup: true , hide:true},
    { field: 'model', rowDrag:true  },
    { field: 'price' },
  ];

  autoGroupColumnDef  : ColDef= {
    comparator: (valueA, valueB) => {
      var res = valueA == valueB ? 0 : valueA > valueB ? 1 : -1;
      return res;
    },
    field: 'make',
    headerName: 'Group',
    sort: 'asc' ,
    minWidth: 200,
    cellRendererParams: {
      suppressCount: true,
    },
  };
  defaultColDef = {
    flex: 1,
    minWidth: 100,
    sortable: false,
    resizable: false,
    lockPinned: true,
  };

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Toyota', model: 'Supra', price: 55000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Ford', model: 'Mustang', price: 72000 },
    { make: 'Ford', model: 'Fiesta', price: 17000 },
    { make: 'BMW', model: 'M3', price: 83000 },
    { make: 'BMW', model: 'M5', price: 103000 },
  ];

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
}
