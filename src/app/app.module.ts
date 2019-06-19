import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatCardModule, MatToolbarModule, MatSidenavModule, MatListModule, MatGridListModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTreeModule,
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressFormDemoComponent } from './address-form-demo/address-form-demo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationDemoComponent } from './navigation-demo/navigation-demo.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardDemoComponent } from './dashboard-demo/dashboard-demo.component';
import { DragDropDemoComponent } from './drag-drop-demo/drag-drop-demo.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { TreeDemoComponent } from './tree-demo/tree-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressFormDemoComponent,
    NavigationDemoComponent,
    DashboardDemoComponent,
    DragDropDemoComponent,
    TableDemoComponent,
    TreeDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    DragDropModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
