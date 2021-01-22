import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroMedicoComponent } from './tablero-medico.component';

describe('TableroMedicoComponent', () => {
  let component: TableroMedicoComponent;
  let fixture: ComponentFixture<TableroMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableroMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableroMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
