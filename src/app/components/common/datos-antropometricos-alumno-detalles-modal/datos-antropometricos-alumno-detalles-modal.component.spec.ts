import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialDatosAlumnoModalComponent } from './datos-antropometricos-alumno-detalles-modal.component';

describe('HistorialDatosAlumnoModalComponent', () => {
  let component: HistorialDatosAlumnoModalComponent;
  let fixture: ComponentFixture<HistorialDatosAlumnoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialDatosAlumnoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialDatosAlumnoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
