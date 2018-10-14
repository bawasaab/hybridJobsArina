import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceJobsPage } from './police-jobs.page';

describe('PoliceJobsPage', () => {
  let component: PoliceJobsPage;
  let fixture: ComponentFixture<PoliceJobsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliceJobsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliceJobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
