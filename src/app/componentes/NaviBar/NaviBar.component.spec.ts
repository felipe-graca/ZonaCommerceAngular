/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NaviBarComponent } from './NaviBar.component';

describe('NaviBarComponent', () => {
  let component: NaviBarComponent;
  let fixture: ComponentFixture<NaviBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaviBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaviBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
