import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesRegistrosAlumnoModalComponent } from './detalles-registros-alumno-modal.component';

describe('DetallesRegistrosAlumnoModalComponent', () => {
  let component: DetallesRegistrosAlumnoModalComponent;
  let fixture: ComponentFixture<DetallesRegistrosAlumnoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesRegistrosAlumnoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesRegistrosAlumnoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
