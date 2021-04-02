import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeWoningComponent } from './de-woning.component';

describe('DeWoningComponent', () => {
  let component: DeWoningComponent;
  let fixture: ComponentFixture<DeWoningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeWoningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeWoningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
