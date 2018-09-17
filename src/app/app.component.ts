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

  plDataDefault = cleanTheData(raw);

  // onPost() {
  //   this.plistaFirebase
  //     .postPlistaData(this.plData)
  //     .subscribe(
  //       response => console.log(response),
  //       error => console.log(error)
  //     );
  // }
  onPutDefaultData() {
    this.plistaFirebase
      .putPlistaData(this.plDataDefault)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }
  onGet() {
    this.plistaFirebase
      .getPlistaData()
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }
}
