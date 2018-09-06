import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimePicker2Component } from './time-picker2.component';

describe('TimePicker2Component', () => {
  let component: TimePicker2Component;
  let fixture: ComponentFixture<TimePicker2Component>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePicker2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimePicker2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
