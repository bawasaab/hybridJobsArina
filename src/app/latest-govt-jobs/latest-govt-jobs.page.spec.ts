import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestGovtJobsPage } from './latest-govt-jobs.page';

describe('LatestGovtJobsPage', () => {
  let component: LatestGovtJobsPage;
  let fixture: ComponentFixture<LatestGovtJobsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestGovtJobsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestGovtJobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
