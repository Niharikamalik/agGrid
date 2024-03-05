import { Component, OnInit } from '@angular/core';
import { ColDef, FirstDataRenderedEvent, GridApi, SideBarDef } from 'ag-grid-community';

@Component({
  selector: 'app-data-update',
  templateUrl: './data-update.component.html',
  styleUrls: ['./data-update.component.css']
})
export class DataUpdateComponent {

  private gridApi!: GridApi;

  public rowData: any[] | null = getRowData();
  public columnDefs: ColDef[] = [
    {
      headerName: 'Set Filter Column',
      field: 'col1',
      filter: 'agSetColumnFilter',
      editable: true,

    },
    {
      headerName: 'Alpha',
      field: 'alpha',

    }
  ];
  public sideBar: SideBarDef | string | string[] | boolean | null = 'filters';
  public themeClass: string =
    "ag-theme-quartz";

  defaultColDef = {
    flex: 1,
    minWidth : 100 ,
  }


  onFirstDataRendered(params: FirstDataRenderedEvent) {
    params.api.getToolPanelInstance('filters')!.expandFilters();
  }

  updateFirstRow() {
    var firstRow = this.gridApi.getDisplayedRowAtIndex(0);
    if (firstRow) {
      var firstRowData = firstRow.data;
      firstRowData['col1'] += 'X';
      this.gridApi.applyTransaction({ update: [firstRowData] });
    }
  }

  addDRow() {
    this.gridApi.applyTransaction({ add: [{ col1: 'D' , alpha : 'X'}] });
  }

  reset() {
    this.gridApi.setFilterModel(null);
    this.gridApi.setGridOption('rowData', getRowData());
  }

  onGridReady(params: any ) {
    this.gridApi = params.api;
  }
}
function getRowData() {
  return [
    { col1: 'A' , alpha : 'X'},
    { col1: 'A' , alpha : 'X'},
    { col1: 'B' , alpha : 'X'},
    { col1: 'B' , alpha : 'X'},
    { col1: 'C' , alpha : 'X'},
    { col1: 'C' , alpha : 'X'},
  ];
}



