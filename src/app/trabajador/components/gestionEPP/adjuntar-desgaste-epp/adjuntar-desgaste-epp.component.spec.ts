import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjuntarDesgasteEppComponent } from './adjuntar-desgaste-epp.component';

describe('AdjuntarDesgasteEppComponent', () => {
  let component: AdjuntarDesgasteEppComponent;
  let fixture: ComponentFixture<AdjuntarDesgasteEppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdjuntarDesgasteEppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdjuntarDesgasteEppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
