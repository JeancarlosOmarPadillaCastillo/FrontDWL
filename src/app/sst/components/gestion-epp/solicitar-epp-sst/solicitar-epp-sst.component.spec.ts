import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarEppSstComponent } from './solicitar-epp-sst.component';

describe('SolicitarEPComponent', () => {
  let component: SolicitarEppSstComponent;
  let fixture: ComponentFixture<SolicitarEppSstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitarEppSstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitarEppSstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
