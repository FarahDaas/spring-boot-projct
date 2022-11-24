import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmedcinComponent } from './addmedcin.component';

describe('AddmedcinComponent', () => {
  let component: AddmedcinComponent;
  let fixture: ComponentFixture<AddmedcinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmedcinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmedcinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
