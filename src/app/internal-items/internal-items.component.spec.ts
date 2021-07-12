import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalItemsComponent } from './internal-items.component';

describe('InternalItemsComponent', () => {
  let component: InternalItemsComponent;
  let fixture: ComponentFixture<InternalItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
