import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosAntropometricosActualesAlumnoModalComponent } from './datos-antropometricos-actuales-alumno-modal.component';

describe('DatosAntropometricosActualesAlumnoModalComponent', () => {
  let component: DatosAntropometricosActualesAlumnoModalComponent;
  let fixture: ComponentFixture<DatosAntropometricosActualesAlumnoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosAntropometricosActualesAlumnoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosAntropometricosActualesAlumnoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
