import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcAlumnoCardComponent } from './imc-alumno-card.component';

describe('ImcAlumnoCardComponent', () => {
  let component: ImcAlumnoCardComponent;
  let fixture: ComponentFixture<ImcAlumnoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImcAlumnoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImcAlumnoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
