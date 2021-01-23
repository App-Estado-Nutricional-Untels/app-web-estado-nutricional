import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IccGrupalCardComponent } from './icc-grupal-card.component';

describe('IccGrupalCardComponent', () => {
  let component: IccGrupalCardComponent;
  let fixture: ComponentFixture<IccGrupalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IccGrupalCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IccGrupalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
