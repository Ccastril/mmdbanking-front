import { Component } from '@angular/core';
import { UserHomeNavbarComponent } from './user-home-navbar/user-home-navbar.component';
import { UserHomeBannerComponent } from './user-home-banner/user-home-banner.component';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [UserHomeNavbarComponent, UserHomeBannerComponent],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {
  userFirstName = 'Christopher'
}
