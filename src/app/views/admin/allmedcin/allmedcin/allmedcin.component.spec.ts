import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmedcinComponent } from './allmedcin.component';

describe('AllmedcinComponent', () => {
  let component: AllmedcinComponent;
  let fixture: ComponentFixture<AllmedcinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllmedcinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmedcinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
