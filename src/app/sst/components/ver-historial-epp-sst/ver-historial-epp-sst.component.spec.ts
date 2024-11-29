import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerHistorialEppSstComponent } from './ver-historial-epp-sst.component';

describe('VerHistorialEppSstComponent', () => {
  let component: VerHistorialEppSstComponent;
  let fixture: ComponentFixture<VerHistorialEppSstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerHistorialEppSstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerHistorialEppSstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
