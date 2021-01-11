import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarComponent } from './seleccionar.component';

describe('SeleccionarComponent', () => {
  let component: SeleccionarComponent;
  let fixture: ComponentFixture<SeleccionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
