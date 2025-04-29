import { Component, input, signal } from '@angular/core';
import { HeaderTitleService } from '../../services/header-title/header-title.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userImg   = signal("/assets/header/user-img-template.svg")
  username  = signal("Username")
  userFunction = signal("User function")

  constructor(public headerTitleService: HeaderTitleService) { }
}
