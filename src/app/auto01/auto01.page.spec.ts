import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Auto01Page } from './auto01.page';

describe('Auto01Page', () => {
  let component: Auto01Page;
  let fixture: ComponentFixture<Auto01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Auto01Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Auto01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
