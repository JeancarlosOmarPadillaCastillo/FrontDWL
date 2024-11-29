import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialDecisionesComponent } from './historial-decisiones.component';

describe('HistorialDecisionesComponent', () => {
  let component: HistorialDecisionesComponent;
  let fixture: ComponentFixture<HistorialDecisionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialDecisionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialDecisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
