import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingJobsPage } from './upcoming-jobs.page';

describe('UpcomingJobsPage', () => {
  let component: UpcomingJobsPage;
  let fixture: ComponentFixture<UpcomingJobsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingJobsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingJobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
