import { TestBed } from '@angular/core/testing';

import { UnTestServiceService } from './un-test-service.service';

describe('UnTestServiceService', () => {
  let service: UnTestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnTestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
