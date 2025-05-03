import { Component } from '@angular/core';
import { HeaderTitleService } from '../services/header-title/header-title.service';
import { ComboChartAllComponent } from "../components/charts/combo-chart-all/combo-chart-all.component";
import { BarChartAllComponent } from "../components/charts/bar-chart-all/bar-chart-all.component";



@Component({
  selector: 'app-tendencias',
  imports: [ComboChartAllComponent, BarChartAllComponent],
  templateUrl: './tendencias.component.html',
  styleUrl: './tendencias.component.css'
})
export class TendenciasComponent {
  constructor(public headerTitleService: HeaderTitleService) { }

  ngOnInit(): void {
    this.headerTitleService.setTitle('Painel de controle');

  }
}
