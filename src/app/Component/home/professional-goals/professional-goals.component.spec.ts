import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalGoalsComponent } from './professional-goals.component';

describe('ProfessionalGoalsComponent', () => {
  let component: ProfessionalGoalsComponent;
  let fixture: ComponentFixture<ProfessionalGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalGoalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
