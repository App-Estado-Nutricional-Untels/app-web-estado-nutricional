import { TestBed } from '@angular/core/testing';

import { AdministradorGuardaService } from './administrador-guarda.service';

describe('AdministradorGuardaService', () => {
  let service: AdministradorGuardaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministradorGuardaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
