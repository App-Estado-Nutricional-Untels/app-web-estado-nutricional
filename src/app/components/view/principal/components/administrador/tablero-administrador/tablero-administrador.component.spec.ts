import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroAdministradorComponent } from './tablero-administrador.component';

describe('TableroAdministradorComponent', () => {
  let component: TableroAdministradorComponent;
  let fixture: ComponentFixture<TableroAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableroAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableroAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
