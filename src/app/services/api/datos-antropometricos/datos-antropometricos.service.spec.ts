import { TestBed } from '@angular/core/testing';

import { DatosAntropometricosService } from './datos-antropometricos.service';

describe('DatosAntropometricosService', () => {
  let service: DatosAntropometricosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosAntropometricosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
