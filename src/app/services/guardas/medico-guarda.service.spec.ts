import { TestBed } from '@angular/core/testing';

import { MedicoGuardaService } from './medico-guarda.service';

describe('MedicoGuardaService', () => {
  let service: MedicoGuardaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicoGuardaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
