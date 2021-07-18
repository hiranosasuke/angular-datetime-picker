import { NgModule } from '@angular/core';
import { AngularDatetimePickerComponent } from './angular-datetime-picker.component';
import { AngularDatetimePickerDirective } from './angular-datetime-picker.directive';



@NgModule({
  declarations: [	
    AngularDatetimePickerComponent,
    AngularDatetimePickerDirective
  ],
  imports: [
  ],
  exports: [
    AngularDatetimePickerComponent,
    AngularDatetimePickerDirective
  ]
})
export class AngularDatetimePickerModule { }
