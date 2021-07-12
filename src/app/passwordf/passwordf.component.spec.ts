import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordfComponent } from './passwordf.component';

describe('PasswordfComponent', () => {
  let component: PasswordfComponent;
  let fixture: ComponentFixture<PasswordfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
