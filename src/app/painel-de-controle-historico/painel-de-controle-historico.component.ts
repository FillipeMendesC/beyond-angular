import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardKpiComponent } from '../components/card-kpi/card-kpi.component';

@Component({
  selector: 'app-painel-de-controle-historico',
  imports: [CommonModule, CardKpiComponent],
  templateUrl: './painel-de-controle-historico.component.html',
  styleUrl: './painel-de-controle-historico.component.css'
})
export class PainelDeControleHistoricoComponent {
    @Input() titulo:string = '';
}


