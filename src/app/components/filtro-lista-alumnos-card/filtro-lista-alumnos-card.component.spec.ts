import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroListaAlumnosCardComponent } from './filtro-lista-alumnos-card.component';

describe('FiltroListaAlumnosCardComponent', () => {
  let component: FiltroListaAlumnosCardComponent;
  let fixture: ComponentFixture<FiltroListaAlumnosCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroListaAlumnosCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroListaAlumnosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
