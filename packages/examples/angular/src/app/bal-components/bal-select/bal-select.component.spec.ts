import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalSelectComponent } from './bal-select.component';

describe('BalSelectComponent', () => {
  let component: BalSelectComponent;
  let fixture: ComponentFixture<BalSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
