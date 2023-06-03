import { TestBed } from '@angular/core/testing';

import { FuncsServiceService } from './funcs-service.service';

describe('FuncsServiceService', () => {
  let service: FuncsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
