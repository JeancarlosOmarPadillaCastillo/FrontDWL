import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialEPPComponent } from './historial-epp.component';

describe('HistorialEPPComponent', () => {
  let component: HistorialEPPComponent;
  let fixture: ComponentFixture<HistorialEPPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialEPPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialEPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
