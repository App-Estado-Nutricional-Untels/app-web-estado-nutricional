import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPersonalesDetallesModalComponent } from './datos-personales-detalles-modal.component';

describe('DatosPersonalesDetallesModalComponent', () => {
  let component: DatosPersonalesDetallesModalComponent;
  let fixture: ComponentFixture<DatosPersonalesDetallesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosPersonalesDetallesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosPersonalesDetallesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
