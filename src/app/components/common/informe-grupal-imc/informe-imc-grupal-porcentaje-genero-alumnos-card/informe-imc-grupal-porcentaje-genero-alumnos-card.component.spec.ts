import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeImcGrupalPorcentajeGeneroAlumnosCardComponent } from './informe-imc-grupal-porcentaje-genero-alumnos-card.component';

describe('InformeImcGrupalPorcentajeGeneroAlumnosCardComponent', () => {
  let component: InformeImcGrupalPorcentajeGeneroAlumnosCardComponent;
  let fixture: ComponentFixture<InformeImcGrupalPorcentajeGeneroAlumnosCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeImcGrupalPorcentajeGeneroAlumnosCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeImcGrupalPorcentajeGeneroAlumnosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
