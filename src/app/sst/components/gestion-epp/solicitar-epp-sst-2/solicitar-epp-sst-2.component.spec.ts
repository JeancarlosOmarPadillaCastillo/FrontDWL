import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarEppSst2Component } from './solicitar-epp-sst-2.component';

describe('SolicitarEP2Component', () => {
  let component: SolicitarEppSst2Component;
  let fixture: ComponentFixture<SolicitarEppSst2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitarEppSst2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitarEppSst2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
