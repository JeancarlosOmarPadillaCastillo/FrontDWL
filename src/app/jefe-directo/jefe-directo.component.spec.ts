import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JefeDirectoComponent } from './jefe-directo.component';

describe('JefeDirectoComponent', () => {
  let component: JefeDirectoComponent;
  let fixture: ComponentFixture<JefeDirectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JefeDirectoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JefeDirectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
