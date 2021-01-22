import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroAlumnoComponent } from './tablero-alumno.component';

describe('TableroAlumnoComponent', () => {
  let component: TableroAlumnoComponent;
  let fixture: ComponentFixture<TableroAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableroAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableroAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
