import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosActualesAlumnoComponent } from './datos-actuales-alumno.component';

describe('DatosActualesAlumnoComponent', () => {
  let component: DatosActualesAlumnoComponent;
  let fixture: ComponentFixture<DatosActualesAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosActualesAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosActualesAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
