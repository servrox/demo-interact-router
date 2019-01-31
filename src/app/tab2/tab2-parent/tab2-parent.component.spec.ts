import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab2ParentComponent } from './tab2-parent.component';

describe('Tab2ParentComponent', () => {
  let component: Tab2ParentComponent;
  let fixture: ComponentFixture<Tab2ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab2ParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab2ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
