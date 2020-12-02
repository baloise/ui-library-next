import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalComponentsComponent } from './bal-components.component';

describe('BalComponentsComponent', () => {
  let component: BalComponentsComponent;
  let fixture: ComponentFixture<BalComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
