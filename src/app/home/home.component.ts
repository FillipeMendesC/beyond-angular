import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from '../services/header-title.service';
import { ContentSectionComponent } from "../shared/content-section/content-section.component";

@Component({
  selector: 'app-home',
  imports: [ContentSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{
  constructor(public headerTitleService: HeaderTitleService) { }

  ngOnInit(): void {
    this.headerTitleService.setTitle('Sua Página');
  }
}
