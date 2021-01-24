import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosActualesAlumnoCardComponent } from './datos-actuales-alumno-card.component';

describe('DatosActualesAlumnoCardComponent', () => {
  let component: DatosActualesAlumnoCardComponent;
  let fixture: ComponentFixture<DatosActualesAlumnoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosActualesAlumnoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosActualesAlumnoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
