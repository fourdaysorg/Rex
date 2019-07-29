import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveDonationPage } from './receive-donation.page';

describe('ReceiveDonationPage', () => {
  let component: ReceiveDonationPage;
  let fixture: ComponentFixture<ReceiveDonationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiveDonationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveDonationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
