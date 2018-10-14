import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefenceJobsPage } from './defence-jobs.page';

describe('DefenceJobsPage', () => {
  let component: DefenceJobsPage;
  let fixture: ComponentFixture<DefenceJobsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefenceJobsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefenceJobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
