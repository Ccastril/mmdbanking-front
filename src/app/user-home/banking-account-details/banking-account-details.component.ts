import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banking-account-details',
  standalone: true,
  imports: [],
  templateUrl: './banking-account-details.component.html',
  styleUrl: './banking-account-details.component.css'
})
export class BankingAccountDetailsComponent {

  @Input() selectedAccount:any;

  constructor() {
  }

}
