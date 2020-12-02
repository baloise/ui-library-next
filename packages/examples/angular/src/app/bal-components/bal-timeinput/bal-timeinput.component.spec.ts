import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalTimeinputComponent } from './bal-timeinput.component';

describe('BalTimeinputComponent', () => {
  let component: BalTimeinputComponent;
  let fixture: ComponentFixture<BalTimeinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalTimeinputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalTimeinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
