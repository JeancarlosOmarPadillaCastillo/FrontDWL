import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarEP2Component } from './solicitar-ep2.component';

describe('SolicitarEP2Component', () => {
  let component: SolicitarEP2Component;
  let fixture: ComponentFixture<SolicitarEP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitarEP2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitarEP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
