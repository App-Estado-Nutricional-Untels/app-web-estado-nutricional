import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeImcGrupalModalComponent } from './informe-imc-grupal-modal.component';

describe('InformeImcGrupalModalComponent', () => {
  let component: InformeImcGrupalModalComponent;
  let fixture: ComponentFixture<InformeImcGrupalModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeImcGrupalModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeImcGrupalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
