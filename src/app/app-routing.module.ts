import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditableTableComponent } from './editable-table/editable-table.component';
import { AppComponent } from './app.component';
import { ViewTableComponent } from './view-table/view-table.component';
import { FormEditComponent } from './form-edit/form-edit.component';

const appRoutes: Routes = [
  { path: 'inline-edit', component: EditableTableComponent },
  {
    path: 'view-table',
    component: ViewTableComponent,
    children: [{ path: 'edit/:key', component: FormEditComponent }]
  }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
