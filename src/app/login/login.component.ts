import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import * as apiService from '../api/login-api';
import { LoginFooterComponent } from './login-footer/login-footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, LoginFooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  usernameControl = new FormControl('');
  passwordControl = new FormControl('');

     submitLogin = async () : Promise<any> => {
        try {
          console.log(this.usernameControl.value);
          console.log(this.passwordControl.value);
          let response = await apiService.loginUser(this.usernameControl.value, this.passwordControl.value);
          alert(response);
        }catch(error) {

        }
     }
}
