import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditableTableComponent } from './editable-table/editable-table.component';
import { AppComponent } from './app.component';
import { ViewTableComponent } from './view-table/view-table.component';

const appRoutes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'inline-edit', component: EditableTableComponent },
  { path: 'view-table', component: ViewTableComponent }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
