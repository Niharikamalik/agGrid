import { Component } from '@angular/core';
import { GridApi,ColumnApi } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  private gridApi: GridApi;
  private gridColumnApi: ColumnApi;

  columnDefs = [
    {
      headerName: 'Car Information',
      children: [
        { headerName: 'Make', field: 'make' },
        { headerName: 'Model', field: 'model' },
      ],
    },
    {
      headerName: 'Price Information',
      children: [
        {
          headerName: 'Currency',
          field: 'currency',
          // col Span
          colSpan: (params: any) => {
            console.log(params.data.currency);
            const currency = params.data.currency;
            if (currency === 'USD') {
              // have all USD column width 4
              return 2;
            } else {
              // all other rows should be just normal
              return 1;
            }
          },
        },
        { headerName: 'Price', field: 'price' },
      ],
    },
  ];
  defaultColDef = {
    flex: 1,
    minWidth: 100,
  };

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000, currency: 'USD' },
    { make: 'Ford', model: 'Mondeo', price: 32000, currency: 'USD' },
    { make: 'Porsche', model: 'Boxster', price: 72000, currency: 'EUR' },
  ];

  onGridReady(params: { api: GridApi<any>; columnApi: ColumnApi }) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
}
