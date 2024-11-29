import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarSolicitudEppSstComponent } from './revisar-solicitud-epp-sst.component';

describe('RevisarSolicitudEPPComponent', () => {
  let component: RevisarSolicitudEppSstComponent;
  let fixture: ComponentFixture<RevisarSolicitudEppSstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevisarSolicitudEppSstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisarSolicitudEppSstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
