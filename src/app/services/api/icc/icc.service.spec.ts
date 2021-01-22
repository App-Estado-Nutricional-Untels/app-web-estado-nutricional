import { TestBed } from '@angular/core/testing';

import { IccService } from './icc.service';

describe('IccService', () => {
  let service: IccService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IccService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
