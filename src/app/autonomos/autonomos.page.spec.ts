import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutonomosPage } from './autonomos.page';

describe('AutonomosPage', () => {
  let component: AutonomosPage;
  let fixture: ComponentFixture<AutonomosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutonomosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutonomosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
