import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeImcGrupalCardComponent } from './informe-imc-grupal-card.component';

describe('InformeImcGrupalCardComponent', () => {
  let component: InformeImcGrupalCardComponent;
  let fixture: ComponentFixture<InformeImcGrupalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeImcGrupalCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeImcGrupalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
