import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarUsuarioModalComponent } from './eliminar-usuario-modal.component';

describe('EliminarUsuarioModalComponent', () => {
  let component: EliminarUsuarioModalComponent;
  let fixture: ComponentFixture<EliminarUsuarioModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarUsuarioModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarUsuarioModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
