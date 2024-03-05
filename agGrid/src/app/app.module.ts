import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridComponent } from './pages/ag-grid/ag-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { RowComponent } from './pages/row/row.component';
import 'ag-grid-enterprise';
import { FilterComponent } from './pages/filter/filter.component';
import { DataUpdateComponent } from './pages/data-update/data-update.component';

@NgModule({
  declarations: [AppComponent, AgGridComponent, RowComponent, FilterComponent, DataUpdateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridAngular,
    HttpClientModule,
    AgGridModule,
    BrowserAnimationsModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
