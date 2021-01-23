import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcentajeGeneroAlumnosCardComponent } from './porcentaje-genero-alumnos-card.component';

describe('PorcentajeGeneroAlumnosCardComponent', () => {
  let component: PorcentajeGeneroAlumnosCardComponent;
  let fixture: ComponentFixture<PorcentajeGeneroAlumnosCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorcentajeGeneroAlumnosCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorcentajeGeneroAlumnosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
