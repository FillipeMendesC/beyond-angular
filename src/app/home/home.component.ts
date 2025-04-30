import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from '../services/header-title/header-title.service';
import { ContentSectionComponent } from "../shared/content-section/content-section.component";
import { CardEventComponent } from "../components/card-event/card-event.component";
import { CardFilterComponent } from "../components/card-filter/card-filter.component";

@Component({
  selector: 'app-home',
  imports: [ContentSectionComponent, CardEventComponent, CardFilterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{
  constructor(public headerTitleService: HeaderTitleService) { }

  ngOnInit(): void {
    this.headerTitleService.setTitle('Sua Página');
  }
}
