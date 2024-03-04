import { Component } from '@angular/core';
// import {AgGridAngular} from 'ag-grid-angular'
import {ColDef} from 'ag-grid-community'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "make",filter:true , flex:2 },
    { field: "model" ,filter:true , flex:2 },
    { field: "price", filter:true , flex:2 },
    { field: "electric",filter:true , flex:2 }
  ];
}
