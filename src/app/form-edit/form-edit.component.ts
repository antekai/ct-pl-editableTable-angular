import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.less']
})
export class FormEditComponent implements OnInit {
  validateForm: FormGroup;
  paramsSubscription: Subscription;
  // dataSet = []
  parserEuro = value => value.replace('€ ', '');
  formatterEuro = value => `€ ${value}`;
  submitForm(): void {}

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      camp_cpc: [null, [Validators.required]],
      date: [null, [Validators.required]],
      time: [null, [Validators.required]],
      freeClick: [null, [Validators.required]],
      network: [null, [Validators.required]],
      PlistaProduct: [null, [Validators.required]]
    });

    // this.dataSet = {
    //   key: this.route.snapshot.params['key']
    // };
    // this.paramsSubscription = this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.dataSet.key = params['key'];
    //     }
    //   );
  }
}
