import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionEppGaf2Component } from './asignacion-epp-gaf2.component';

describe('AsignacionEppGaf2Component', () => {
  let component: AsignacionEppGaf2Component;
  let fixture: ComponentFixture<AsignacionEppGaf2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignacionEppGaf2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignacionEppGaf2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
