import { Component } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';
declare var google: any;

@Component({
  selector: 'app-combo-chart-all',
  imports: [],
  templateUrl: './combo-chart-all.component.html',
  styleUrl: './combo-chart-all.component.css'
})
export class ComboChartAllComponent {
  ngOnInit(): void {
    // Load the Visualization API and the corechart package.
    google.charts.load('current', { 'packages': ['corechart'] });

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(this.drawChart);
  }

  drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Month', 'Argentina', 'Chile', 'Estados Unidos', 'Paraguai', 'Uruguai', 'Total'],
      ['Janeiro', 452136, 77221, 51919, 104338, 62848, 748462],
      ['Fevereiro', 306756, 92803, 68655, 51802, 47460, 567476],
      ['Março', 223602, 50877, 83609, 39007, 70866, 467961],
      ['Abril', 88051, 37622, 47236, 22245, 18142, 213296],
      ['Maio', 62327, 35962, 46602, 26087, 11599, 182577]
    ]);

    var options = {
      title: 'Entrada de Turistas Mensal por País',
      /*   vAxis: { title: 'Chegadas' },
        hAxis: { title: 'Meses' }, */
      seriesType: 'bars',
      series: { 5: { type: 'line' } },
      width: 1200,
      height: 800
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }
}
