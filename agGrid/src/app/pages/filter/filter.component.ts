import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
// NOTE: Angular CLI does not support component CSS imports: angular-cli/issues/23273
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ColDef, GridReadyEvent } from '@ag-grid-community/core';
import { ColumnApi, FirstDataRenderedEvent, GridApi, SideBarDef } from 'ag-grid-community';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  columnDefs = [
    // set filters
    { field: 'athlete', filter: true },
    {
      field: 'country',
      filter: 'agSetColumnFilter',
    },
    // number filters
    { field: 'gold', filter: 'agNumberColumnFilter' },
    { field: 'silver', filter: 'agNumberColumnFilter' },
    { field: 'bronze', filter: 'agNumberColumnFilter' },
  ];
  defaultColDef = {
    flex: 1,
    minWidth: 200,
    // floatingFilter: true,
  };
  rowData : any [] = [];
  public themeClass: string = 'ag-theme-quartz';
  private gridColumnApi: ColumnApi;
  private gridApi: GridApi;

  constructor(private http: HttpClient) { };

  public sideBar: SideBarDef | string | string[] | boolean | null = 'filters';

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.http
      .get<any[]>('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .subscribe((data) => (this.rowData = data));
  }



}




