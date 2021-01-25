import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeImcGrupalPorcentajeNivelEstresCardComponent } from './informe-imc-grupal-porcentaje-nivel-estres-card.component';

describe('InformeImcGrupalPorcentajeNivelEstresCardComponent', () => {
  let component: InformeImcGrupalPorcentajeNivelEstresCardComponent;
  let fixture: ComponentFixture<InformeImcGrupalPorcentajeNivelEstresCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeImcGrupalPorcentajeNivelEstresCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeImcGrupalPorcentajeNivelEstresCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
