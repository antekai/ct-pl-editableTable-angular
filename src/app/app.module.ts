import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { EditableTableComponent } from './editable-table/editable-table.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FreeclickStringPipe } from './freeclick-string.pipe';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { SelectComponent } from './select/select.component';
import { TimePicker2Component } from './time-picker2/time-picker2.component';
import { CampEuroPipe } from './camp-euro.pipe';
import { PlistaFirebaseService } from './plista-firebase.service';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    EditableTableComponent,
    InputNumberComponent,
    DatePickerComponent,
    CheckboxComponent,
    FreeclickStringPipe,
    RadioGroupComponent,
    SelectComponent,
    TimePicker2Component,
    CampEuroPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    HttpModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, PlistaFirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
