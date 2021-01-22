import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPersonalesFormModalComponent } from './datos-personales-form-modal.component';

describe('DatosPersonalesFormModalComponent', () => {
  let component: DatosPersonalesFormModalComponent;
  let fixture: ComponentFixture<DatosPersonalesFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosPersonalesFormModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosPersonalesFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
