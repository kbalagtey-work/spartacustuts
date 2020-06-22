import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMiniCartComponent } from './custom-mini-cart.component';

describe('CustomMiniCartComponent', () => {
  let component: CustomMiniCartComponent;
  let fixture: ComponentFixture<CustomMiniCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomMiniCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMiniCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
