import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsInAbroadPage } from './jobs-in-abroad.page';

describe('JobsInAbroadPage', () => {
  let component: JobsInAbroadPage;
  let fixture: ComponentFixture<JobsInAbroadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsInAbroadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsInAbroadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
