import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroInventarioGafComponent } from './registro-inventario-gaf.component';

describe('RegistroInventarioGafComponent', () => {
  let component: RegistroInventarioGafComponent;
  let fixture: ComponentFixture<RegistroInventarioGafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroInventarioGafComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroInventarioGafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
