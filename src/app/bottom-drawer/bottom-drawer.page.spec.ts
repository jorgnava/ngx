import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomDrawerPage } from './bottom-drawer.page';

describe('BottomDrawerPage', () => {
  let component: BottomDrawerPage;
  let fixture: ComponentFixture<BottomDrawerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomDrawerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomDrawerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
