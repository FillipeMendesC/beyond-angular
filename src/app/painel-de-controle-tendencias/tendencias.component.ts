import { Component } from '@angular/core';
import { HeaderTitleService } from '../services/header-title/header-title.service';
import { CardKpiComponent } from '../components/card-kpi/card-kpi.component';
import { InputFilterComponent } from "../components/input-filter/input-filter.component";
import { CardAtividadesComponent } from "../components/card-atividades/card-atividades.component";

@Component({
  selector: 'app-tendencias',
  imports: [CardKpiComponent, InputFilterComponent],
  templateUrl: './tendencias.component.html',
  styleUrl: './tendencias.component.css'
})
export class TendenciasComponent {
  constructor(public headerTitleService: HeaderTitleService) { }
  
    ngOnInit(): void {
      this.headerTitleService.setTitle('Painel de controle');
    }
}
