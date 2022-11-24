import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedcinLayoutComponent } from './medcin-layout.component';

describe('MedcinLayoutComponent', () => {
  let component: MedcinLayoutComponent;
  let fixture: ComponentFixture<MedcinLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedcinLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedcinLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
