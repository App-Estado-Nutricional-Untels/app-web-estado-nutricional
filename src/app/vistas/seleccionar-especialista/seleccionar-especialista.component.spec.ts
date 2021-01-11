import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarEspecialistaComponent } from './seleccionar-especialista.component';

describe('SeleccionarEspecialistaComponent', () => {
  let component: SeleccionarEspecialistaComponent;
  let fixture: ComponentFixture<SeleccionarEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionarEspecialistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionarEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
