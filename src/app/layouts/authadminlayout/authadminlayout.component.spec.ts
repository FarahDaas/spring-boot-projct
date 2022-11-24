import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthadminlayoutComponent } from './authadminlayout.component';

describe('AuthadminlayoutComponent', () => {
  let component: AuthadminlayoutComponent;
  let fixture: ComponentFixture<AuthadminlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthadminlayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthadminlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
