import { TestBed } from '@angular/core/testing';

import { InstituteserService } from './instituteser.service';

describe('InstituteserService', () => {
  let service: InstituteserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstituteserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
