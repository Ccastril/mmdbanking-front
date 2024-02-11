import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-user-home-banner',
  standalone: true,
  imports: [],
  templateUrl: './user-home-banner.component.html',
  styleUrl: './user-home-banner.component.css'
})
export class UserHomeBannerComponent {
  @Input() userFullName = '';



  ngOnInit() {
    const element = document.getElementById('dateContainer');
    if(element?.textContent) {
      element.textContent = new Date().toString()
    }

  }

}
