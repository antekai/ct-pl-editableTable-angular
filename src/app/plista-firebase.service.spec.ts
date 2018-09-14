import { TestBed, inject } from '@angular/core/testing';

import { PlistaFirebaseService } from './plista-firebase.service';

describe('PlistaFirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlistaFirebaseService]
    });
  });

  it('should be created', inject([PlistaFirebaseService], (service: PlistaFirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
