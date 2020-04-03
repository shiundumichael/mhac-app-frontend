import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingsAdviceComponent } from './greetings-advice.component';

describe('GreetingsAdviceComponent', () => {
  let component: GreetingsAdviceComponent;
  let fixture: ComponentFixture<GreetingsAdviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetingsAdviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingsAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
