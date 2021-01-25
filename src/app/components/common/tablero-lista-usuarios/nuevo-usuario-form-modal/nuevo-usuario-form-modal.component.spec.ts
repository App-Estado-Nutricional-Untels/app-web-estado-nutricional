import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoUsuarioFormModalComponent } from './nuevo-usuario-form-modal.component';

describe('NuevoUsuarioFormModalComponent', () => {
  let component: NuevoUsuarioFormModalComponent;
  let fixture: ComponentFixture<NuevoUsuarioFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoUsuarioFormModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoUsuarioFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
