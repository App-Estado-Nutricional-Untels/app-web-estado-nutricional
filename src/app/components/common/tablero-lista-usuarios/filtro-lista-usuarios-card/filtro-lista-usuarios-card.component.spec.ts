import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroListaUsuariosCardComponent } from './filtro-lista-usuarios-card.component';

describe('FiltroListaUsuariosCardComponent', () => {
  let component: FiltroListaUsuariosCardComponent;
  let fixture: ComponentFixture<FiltroListaUsuariosCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroListaUsuariosCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroListaUsuariosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
