import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesActualesAlumnoModalComponent } from './detalles-actuales-alumno-modal.component';

describe('DetallesActualesAlumnoModalComponent', () => {
  let component: DetallesActualesAlumnoModalComponent;
  let fixture: ComponentFixture<DetallesActualesAlumnoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesActualesAlumnoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesActualesAlumnoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
