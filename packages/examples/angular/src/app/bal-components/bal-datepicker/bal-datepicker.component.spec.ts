import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalDatepickerComponent } from './bal-datepicker.component';

describe('BalDatepickerComponent', () => {
  let component: BalDatepickerComponent;
  let fixture: ComponentFixture<BalDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalDatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
