import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoActualAlumnoCardComponent } from './estado-actual-alumno-card.component';

describe('EstadoActualAlumnoCardComponent', () => {
  let component: EstadoActualAlumnoCardComponent;
  let fixture: ComponentFixture<EstadoActualAlumnoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoActualAlumnoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoActualAlumnoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
