import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioAlumnoComponent } from './inicio-alumno.component';

describe('InicioAlumnoComponent', () => {
  let component: InicioAlumnoComponent;
  let fixture: ComponentFixture<InicioAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
