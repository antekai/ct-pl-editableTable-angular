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
  dataSet: {
    camp_cpc: number;
    date: string;
    freeClick: boolean;
    key: string;
    network: string;
    PlistaProduct: string;
  }[] = [];
  constructor(
    private plistaFirebase: PlistaFirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  // dataSet = cleanTheData(raw);

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
  ngOnInit(): void {
    this.plistaFirebase
      .getPlistaData()
      .subscribe(
        response => (this.dataSet = response),
        error => console.log(error)
      );
    // console.log(this.dataSet.filter(x => x.key == 0));
    // console.log(this.dataSet.find(x => x.key == 0));
  }
}
