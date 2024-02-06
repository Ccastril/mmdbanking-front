import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-home-banner',
  standalone: true,
  imports: [],
  templateUrl: './user-home-banner.component.html',
  styleUrl: './user-home-banner.component.css'
})
export class UserHomeBannerComponent {
  @Input() userFirstName = '';
}
