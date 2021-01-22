import { TestBed } from '@angular/core/testing';

import { AppUsuarioService } from './app-usuario.service';

describe('AppUsuarioService', () => {
  let service: AppUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
