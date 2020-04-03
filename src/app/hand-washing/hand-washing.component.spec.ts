import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandWashingComponent } from './hand-washing.component';

describe('HandWashingComponent', () => {
  let component: HandWashingComponent;
  let fixture: ComponentFixture<HandWashingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandWashingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandWashingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
