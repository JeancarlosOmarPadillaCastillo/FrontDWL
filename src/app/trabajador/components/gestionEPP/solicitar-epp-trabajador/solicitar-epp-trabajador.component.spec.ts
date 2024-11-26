import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarEppTrabajadorComponent } from './solicitar-epp-trabajador.component';

describe('SolicitarEppTrabajadorComponent', () => {
  let component: SolicitarEppTrabajadorComponent;
  let fixture: ComponentFixture<SolicitarEppTrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitarEppTrabajadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitarEppTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
