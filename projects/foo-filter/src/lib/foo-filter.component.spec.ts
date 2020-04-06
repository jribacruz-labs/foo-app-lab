import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooFilterComponent } from './foo-filter.component';

describe('FooFilterComponent', () => {
  let component: FooFilterComponent;
  let fixture: ComponentFixture<FooFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
