import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionEppGaf3Component } from './asignacion-epp-gaf3.component';

describe('AsignacionEppGaf3Component', () => {
  let component: AsignacionEppGaf3Component;
  let fixture: ComponentFixture<AsignacionEppGaf3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignacionEppGaf3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignacionEppGaf3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
