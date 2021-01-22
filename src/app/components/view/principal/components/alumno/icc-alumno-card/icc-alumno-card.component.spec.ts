import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IccAlumnoCardComponent } from './icc-alumno-card.component';

describe('IccAlumnoCardComponent', () => {
  let component: IccAlumnoCardComponent;
  let fixture: ComponentFixture<IccAlumnoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IccAlumnoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IccAlumnoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
