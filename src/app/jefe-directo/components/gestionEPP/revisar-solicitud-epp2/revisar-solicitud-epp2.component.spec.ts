import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarSolicitudEPP2Component } from './revisar-solicitud-epp2.component';

describe('RevisarSolicitudEPP2Component', () => {
  let component: RevisarSolicitudEPP2Component;
  let fixture: ComponentFixture<RevisarSolicitudEPP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevisarSolicitudEPP2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisarSolicitudEPP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
