import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechazoEppComponent } from './rechazo-epp.component';

describe('RechazoEppComponent', () => {
  let component: RechazoEppComponent;
  let fixture: ComponentFixture<RechazoEppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechazoEppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechazoEppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
