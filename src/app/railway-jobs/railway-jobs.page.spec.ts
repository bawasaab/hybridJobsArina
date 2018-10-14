import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RailwayJobsPage } from './railway-jobs.page';

describe('RailwayJobsPage', () => {
  let component: RailwayJobsPage;
  let fixture: ComponentFixture<RailwayJobsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RailwayJobsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RailwayJobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
