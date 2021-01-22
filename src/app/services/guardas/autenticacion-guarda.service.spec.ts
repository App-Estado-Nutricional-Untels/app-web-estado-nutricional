import { TestBed } from '@angular/core/testing';

import { AutenticacionGuardaService } from './autenticacion-guarda.service';

describe('AutenticacionGuardaService', () => {
  let service: AutenticacionGuardaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticacionGuardaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
