import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from '../services/header-title/header-title.service';

@Component({
  selector: 'app-organizacao',
  imports: [],
  templateUrl: './organizacao.component.html',
  styleUrl: './organizacao.component.css'
})
export class OrganizacaoComponent implements OnInit{
  constructor(public headerTitleService: HeaderTitleService) { }
    
      ngOnInit(): void {
        this.headerTitleService.setTitle('Organização');
      }
}
