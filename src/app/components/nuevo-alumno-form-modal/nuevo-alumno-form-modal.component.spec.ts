import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoAlumnoFormModalComponent } from './nuevo-alumno-form-modal.component';

describe('NuevoAlumnoFormModalComponent', () => {
  let component: NuevoAlumnoFormModalComponent;
  let fixture: ComponentFixture<NuevoAlumnoFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoAlumnoFormModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoAlumnoFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
