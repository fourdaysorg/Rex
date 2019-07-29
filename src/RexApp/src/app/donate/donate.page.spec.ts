import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatePage } from './donate.page';

describe('DonatePage', () => {
  let component: DonatePage;
  let fixture: ComponentFixture<DonatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
