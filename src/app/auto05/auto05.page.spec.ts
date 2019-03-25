import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Auto05Page } from './auto05.page';

describe('Auto05Page', () => {
  let component: Auto05Page;
  let fixture: ComponentFixture<Auto05Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Auto05Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Auto05Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
