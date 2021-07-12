import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Please2Component } from './please2.component';

describe('Please2Component', () => {
  let component: Please2Component;
  let fixture: ComponentFixture<Please2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Please2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Please2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
