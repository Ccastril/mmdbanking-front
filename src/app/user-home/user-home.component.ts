import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { UserHomeNavbarComponent } from './user-home-navbar/user-home-navbar.component';
import { UserHomeBannerComponent } from './user-home-banner/user-home-banner.component';

//services
import * as userService from '../services/user.service';
import { BankingAccountDetailsComponent } from './banking-account-details/banking-account-details.component';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [UserHomeNavbarComponent, UserHomeBannerComponent, CurrencyPipe, BankingAccountDetailsComponent],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {
  userFullName: string;
  accounts: any;
  user: any;
  // selectedAccount:any;
  // hidden:boolean = true;
  selectedAccount: any
  isHidden: boolean;
  btnTextContent: string;

  //how are you getting this information?
  //where is it coming from? the state?
  
  //set up a session for a user
  constructor(){
    this.user = sessionStorage.getItem('user');
    this.user = JSON.parse(this.user);
    console.log("this is the full name" + this.user.firstName + " " + this.user.lastName);
    this.accounts = this.user.accounts;
    this.userFullName = `${this.user.firstName + " " + this.user.lastName}`;
    this.isHidden = true;
    this.btnTextContent = 'View';

  }

  viewAccount(account:any) {
    this.selectedAccount = account;
    if(this.btnTextContent === 'View') {
      this.btnTextContent = 'Hide';
    }

    else if(this.btnTextContent === 'Hide') {
      this.btnTextContent = "View";
      this.selectedAccount = '';
    }
    console.log("this is the selected account", JSON.stringify(this.selectedAccount));

  }

  // viewAccount(account:any, textContent:any){
  //   console.log('this is the text content ', textContent);
  //   switch(textContent) {
  //     case 'View': 
  //       this.selectedAccount = account;
  //       this.textContent = 'Hide';
  //       break;
  //     case 'Hide':
  //       this.textContent = 'View';
  //       this.selectedAccount = null;
  //       break;
  //   }
    

    //what is the purpose of this function?
    /*

      get the selected account
      the selected account refers to teh acco




    */


    // console.log(
    // "WhAT IS THE VALUE OF TEH BUTTON? ", textContent
    // )
    // console.log("accountClickedOn ", JSON.stringify(account));
    // this.selectedAccount = account;
    // if(textContent = 'Valid') {
    //   this.isHidden = false;
    // }
    // this.selectedAccount['isHidden']
    //pass the account frm the table to the method
    //when you hide an account, you don't pass the account to selected account?

  
    //you need to know what the current status of the button is -> default is 'View'
    //all button rely on the hidden valu so clicking one button affects the hidden property of all of them
    //you need to attach the hiden property only to the selected account
    // this.hidden = !this.hidden;
    //this.showHide only where the selectedAccount number matches the account;
  // }

  
  ngOnInit(): void {
  
 



    // const promise = new Promise<string>((resolve, reject) => {
    //   resolve(<string>sessionStorage.getItem('user'));
    // })
    // promise.then((res)=>{
    //   this.user = JSON.parse(res);
    // })
    // promise.catch((error)=> {
    //   console.log(error);
    // })
  }
  


}
