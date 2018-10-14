import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsClosingSoonPage } from './jobs-closing-soon.page';

describe('JobsClosingSoonPage', () => {
  let component: JobsClosingSoonPage;
  let fixture: ComponentFixture<JobsClosingSoonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsClosingSoonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsClosingSoonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
