import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialEppComponent } from './historial-epp.component';

describe('HistorialEppComponent', () => {
  let component: HistorialEppComponent;
  let fixture: ComponentFixture<HistorialEppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialEppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialEppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
