import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { PlistaFirebaseService } from './plista-firebase.service';
import cleanTheData from '../data/cleanTheData';
import raw from '../data/plRawData.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private plistaFirebase: PlistaFirebaseService) {}

  plData = cleanTheData(raw);

  onPost() {
    this.plistaFirebase
      .postPlistaData(this.plData)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }
  onPut() {
    this.plistaFirebase
      .putPlistaData(this.plData)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }
  onGet() {
    this.plistaFirebase
      .getPlistaRaw()
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }
}
