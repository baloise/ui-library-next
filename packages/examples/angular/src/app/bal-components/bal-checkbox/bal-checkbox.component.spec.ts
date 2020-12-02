import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalCheckboxComponent } from './bal-checkbox.component';

describe('BalCheckboxComponent', () => {
  let component: BalCheckboxComponent;
  let fixture: ComponentFixture<BalCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
