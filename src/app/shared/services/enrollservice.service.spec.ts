import { TestBed } from '@angular/core/testing';

import { EnrollserviceService } from './enrollservice.service';

describe('EnrollserviceService', () => {
  let service: EnrollserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrollserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
