import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoofdschermComponent } from './hoofdscherm.component';

describe('HoofdschermComponent', () => {
  let component: HoofdschermComponent;
  let fixture: ComponentFixture<HoofdschermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoofdschermComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoofdschermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
