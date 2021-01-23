import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugerenciaModalComponent } from './sugerencia-modal.component';

describe('SugerenciaModalComponent', () => {
  let component: SugerenciaModalComponent;
  let fixture: ComponentFixture<SugerenciaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SugerenciaModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SugerenciaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
