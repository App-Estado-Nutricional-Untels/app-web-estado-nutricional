import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcGrupalCardComponent } from './imc-grupal-card.component';

describe('ImcGrupalCardComponent', () => {
  let component: ImcGrupalCardComponent;
  let fixture: ComponentFixture<ImcGrupalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImcGrupalCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImcGrupalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
