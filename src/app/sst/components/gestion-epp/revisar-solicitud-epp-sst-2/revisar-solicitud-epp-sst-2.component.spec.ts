import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarSolicitudEppSst2Component } from './revisar-solicitud-epp-sst-2.component';

describe('RevisarSolicitudEPP2Component', () => {
  let component: RevisarSolicitudEppSst2Component;
  let fixture: ComponentFixture<RevisarSolicitudEppSst2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevisarSolicitudEppSst2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisarSolicitudEppSst2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
