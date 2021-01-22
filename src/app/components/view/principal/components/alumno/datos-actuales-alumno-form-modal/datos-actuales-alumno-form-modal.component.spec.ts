import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosActualesAlumnoFormModalComponent } from './datos-actuales-alumno-form-modal.component';

describe('DatosActualesAlumnoFormModalComponent', () => {
  let component: DatosActualesAlumnoFormModalComponent;
  let fixture: ComponentFixture<DatosActualesAlumnoFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosActualesAlumnoFormModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosActualesAlumnoFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
