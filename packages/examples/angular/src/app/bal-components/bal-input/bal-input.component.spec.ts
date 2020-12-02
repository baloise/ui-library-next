import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalInputComponent } from './bal-input.component';

describe('BalInputComponent', () => {
  let component: BalInputComponent;
  let fixture: ComponentFixture<BalInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
