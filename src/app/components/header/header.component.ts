import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userName: string = 'Alper Yüzgeç';
  categories: string[] = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
}
