import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1ParentComponent } from './tab1-parent.component';

describe('Tab1ParentComponent', () => {
  let component: Tab1ParentComponent;
  let fixture: ComponentFixture<Tab1ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab1ParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
