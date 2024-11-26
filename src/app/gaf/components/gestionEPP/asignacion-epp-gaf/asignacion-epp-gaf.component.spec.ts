import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionEppGafComponent } from './asignacion-epp-gaf.component';

describe('AsignacionEppGafComponent', () => {
  let component: AsignacionEppGafComponent;
  let fixture: ComponentFixture<AsignacionEppGafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignacionEppGafComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignacionEppGafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
