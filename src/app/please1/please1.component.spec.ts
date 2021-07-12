import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Please1Component } from './please1.component';

describe('Please1Component', () => {
  let component: Please1Component;
  let fixture: ComponentFixture<Please1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Please1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Please1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
