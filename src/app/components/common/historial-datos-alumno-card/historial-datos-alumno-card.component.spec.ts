import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialDatosAlumnoCardComponent } from './historial-datos-alumno-card.component';

describe('HistorialDatosAlumnoCardComponent', () => {
  let component: HistorialDatosAlumnoCardComponent;
  let fixture: ComponentFixture<HistorialDatosAlumnoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialDatosAlumnoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialDatosAlumnoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
