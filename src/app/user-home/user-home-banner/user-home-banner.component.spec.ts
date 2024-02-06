import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeBannerComponent } from './user-home-banner.component';

describe('UserHomeBannerComponent', () => {
  let component: UserHomeBannerComponent;
  let fixture: ComponentFixture<UserHomeBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserHomeBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserHomeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
