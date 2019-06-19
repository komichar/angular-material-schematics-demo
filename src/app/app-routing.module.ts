import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardDemoComponent } from './dashboard-demo/dashboard-demo.component';
import { NavigationDemoComponent } from './navigation-demo/navigation-demo.component';
import { AddressFormDemoComponent } from './address-form-demo/address-form-demo.component';
import { DragDropDemoComponent } from './drag-drop-demo/drag-drop-demo.component';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { TreeDemoComponent } from './tree-demo/tree-demo.component';

const routes: Routes = [
  { path: 'address', component: AddressFormDemoComponent },
  { path: 'navigation', component: NavigationDemoComponent },
  { path: 'dashboard', component: DashboardDemoComponent },
  { path: 'drag-drop', component: DragDropDemoComponent },
  { path: 'table', component: TableDemoComponent },
  { path: 'tree', component: TreeDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
