import { TestBed } from '@angular/core/testing';

import { GlobalserviceService } from './globalservice.service';

describe('GlobalserviceService', () => {
  let service: GlobalserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
