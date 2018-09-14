import { Component, OnInit } from '@angular/core';
import raw from '../../data/plRawData.json';
import cleanTheData from '../../data/cleanTheData';
import { PlistaFirebaseService } from '../plista-firebase.service';

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html'
})
export class ViewTableComponent implements OnInit {
  constructor(private plistaFirebase: PlistaFirebaseService) {}
  dataSet = [];

  ngOnInit(): void {
    this.plistaFirebase
      .getPlistaData()
      .subscribe(
        response => (this.dataSet = response),
        error => console.log(error)
      );
    console.log(this.dataSet);
  }
}
