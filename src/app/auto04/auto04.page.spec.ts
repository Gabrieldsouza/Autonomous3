import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Auto04Page } from './auto04.page';

describe('Auto04Page', () => {
  let component: Auto04Page;
  let fixture: ComponentFixture<Auto04Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Auto04Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Auto04Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
