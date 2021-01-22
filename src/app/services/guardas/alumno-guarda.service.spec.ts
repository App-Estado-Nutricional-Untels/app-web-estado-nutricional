import { TestBed } from '@angular/core/testing';

import { AlumnoGuardaService } from './alumno-guarda.service';

describe('AlumnoGuardaService', () => {
  let service: AlumnoGuardaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnoGuardaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
