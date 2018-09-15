import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { registerLocaleData } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import en from '@angular/common/locales/en';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';

import { AppComponent } from './app.component';
import { EditableTableComponent } from './editable-table/editable-table.component';
import { ViewTableComponent } from './view-table/view-table.component';
// pipes,services,modules
import { FreeclickStringPipe } from './freeclick-string.pipe';
import { CampEuroPipe } from './camp-euro.pipe';
import { PlistaFirebaseService } from './plista-firebase.service';
import { AppRoutingModule } from './app-routing.module';
import { FormEditComponent } from './form-edit/form-edit.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    EditableTableComponent,
    ViewTableComponent,
    FreeclickStringPipe,
    CampEuroPipe,
    FormEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, PlistaFirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
