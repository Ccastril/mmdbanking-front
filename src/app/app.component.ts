import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, JumbotronComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BankingAppFrontB';
  showNavbar: boolean = true;

  constructor(private router: Router) {
    router.events.subscribe((val)=>{
      if(val instanceof NavigationEnd) {
        console.log(val);
        if (val.url == '/user-home') {
         
          this.showNavbar = false;
        }else {
          this.showNavbar = true;
        }
      }
    })
  }
}
