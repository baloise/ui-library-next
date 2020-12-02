import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalRadioComponent } from './bal-radio.component';

describe('BalRadioComponent', () => {
  let component: BalRadioComponent;
  let fixture: ComponentFixture<BalRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
