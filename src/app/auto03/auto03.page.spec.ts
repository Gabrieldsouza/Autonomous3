import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Auto03Page } from './auto03.page';

describe('Auto03Page', () => {
  let component: Auto03Page;
  let fixture: ComponentFixture<Auto03Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Auto03Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Auto03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
