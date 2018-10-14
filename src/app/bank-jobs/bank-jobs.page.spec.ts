import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankJobsPage } from './bank-jobs.page';

describe('BankJobsPage', () => {
  let component: BankJobsPage;
  let fixture: ComponentFixture<BankJobsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankJobsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankJobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
