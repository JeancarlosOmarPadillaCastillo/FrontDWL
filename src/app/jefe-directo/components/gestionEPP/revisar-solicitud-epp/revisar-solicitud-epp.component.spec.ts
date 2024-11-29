import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarSolicitudEPPComponent } from './revisar-solicitud-epp.component';

describe('RevisarSolicitudEPPComponent', () => {
  let component: RevisarSolicitudEPPComponent;
  let fixture: ComponentFixture<RevisarSolicitudEPPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevisarSolicitudEPPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisarSolicitudEPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
