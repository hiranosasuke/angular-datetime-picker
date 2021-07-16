import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDatetimePickerComponent } from './angular-datetime-picker.component';

describe('AngularDatetimePickerComponent', () => {
  let component: AngularDatetimePickerComponent;
  let fixture: ComponentFixture<AngularDatetimePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDatetimePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDatetimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
