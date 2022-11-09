import { TestBed } from '@angular/core/testing';

import { CourseSerService } from './course-ser.service';

describe('CourseSerService', () => {
  let service: CourseSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
