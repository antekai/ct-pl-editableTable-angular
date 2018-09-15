import { Component, OnInit } from '@angular/core';
import raw from '../../data/plRawData.json';
import cleanTheData from '../../data/cleanTheData';
import { PlistaFirebaseService } from '../plista-firebase.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html'
})
export class ViewTableComponent implements OnInit {
  constructor(
    private plistaFirebase: PlistaFirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  dataSet = cleanTheData(raw);

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
  ngOnInit(): void {
    // this.plistaFirebase
    //   .getPlistaData()
    //   .subscribe(
    //     response => (this.dataSet = response),
    //     error => console.log(error)
    //   );
    console.log(this.dataSet);
  }
}
