import { Component } from '@angular/core';

@Component({
  selector: 'app-time-picker2',
  templateUrl: './time-picker2.component.html'
})
export class TimePicker2Component {
  time: Date | null = null;

  log(time: Date): void {
    console.log(time && time.toTimeString());
  }
}
