import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClericalJobsPage } from './clerical-jobs.page';

describe('ClericalJobsPage', () => {
  let component: ClericalJobsPage;
  let fixture: ComponentFixture<ClericalJobsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClericalJobsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClericalJobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
