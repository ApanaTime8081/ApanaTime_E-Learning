import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollcourseComponent } from './enrollcourse.component';

describe('EnrollcourseComponent', () => {
  let component: EnrollcourseComponent;
  let fixture: ComponentFixture<EnrollcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollcourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
