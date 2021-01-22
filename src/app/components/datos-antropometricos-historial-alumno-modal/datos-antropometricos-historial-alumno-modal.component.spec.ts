import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosAntropometricosHistorialAlumnoModalComponent } from './datos-antropometricos-historial-alumno-modal.component';

describe('DatosAntropometricosHistorialAlumnoModalComponent', () => {
  let component: DatosAntropometricosHistorialAlumnoModalComponent;
  let fixture: ComponentFixture<DatosAntropometricosHistorialAlumnoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosAntropometricosHistorialAlumnoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosAntropometricosHistorialAlumnoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
