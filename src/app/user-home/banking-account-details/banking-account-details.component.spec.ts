import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingAccountDetailsComponent } from './banking-account-details.component';

describe('BankingAccountDetailsComponent', () => {
  let component: BankingAccountDetailsComponent;
  let fixture: ComponentFixture<BankingAccountDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankingAccountDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BankingAccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
