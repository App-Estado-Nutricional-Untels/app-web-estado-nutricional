import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeImcGrupalPorcentajeRendimientoAcademicoCardComponent } from './informe-imc-grupal-porcentaje-rendimiento-academico-card.component';

describe('InformeImcGrupalPorcentajeRendimientoAcademicoCardComponent', () => {
  let component: InformeImcGrupalPorcentajeRendimientoAcademicoCardComponent;
  let fixture: ComponentFixture<InformeImcGrupalPorcentajeRendimientoAcademicoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeImcGrupalPorcentajeRendimientoAcademicoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeImcGrupalPorcentajeRendimientoAcademicoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
