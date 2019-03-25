import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Auto02Page } from './auto02.page';

describe('Auto02Page', () => {
  let component: Auto02Page;
  let fixture: ComponentFixture<Auto02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Auto02Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Auto02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
