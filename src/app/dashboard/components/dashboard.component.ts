import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DadosService } from '../services';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public junho: string = ""
  public julho: string = ""
  public agosto: string = ""
  public setembro: string = ""

  private dados: any;

  @ViewChild("formDados", { static: true }) formDados?: NgForm;

  constructor(private dadosService: DadosService) { }

  ngOnInit(): void {
  }

  init(): void {
    if (typeof (google) !== "undefined") {
      google.charts.load('current', { 'packages': ['corechart'] });
      setTimeout(() => {
        google.charts.setOnLoadCallback(this.exibirGraficos());
      }, 1000);
    }
  }

  exibirGraficos(): void {
    this.exibirLineChart();

  }

  exibirLineChart(): void {
    const el = document.getElementById('line_chart');
    const chart = new google.visualization.LineChart(el);

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  dadosInputs(): void {
    let junho = parseInt(this.junho)
    let julho = parseInt(this.julho)
    let agosto = parseInt(this.agosto)
    let setembro = parseInt(this.setembro)
    this.dadosService.setarDados(junho, julho, agosto, setembro)
    this.dadosService.obterDados().subscribe(
      dados => {
        this.dados = dados;
        this.init();
      }
    )
  }

  obterDataTable(): any {
    const data = new google.visualization.DataTable();

    data.addColumn('string', 'Mês');
    data.addColumn('number', 'Leitos ocupados')
    data.addRows(this.dados)

    return data
  }

  obterOpcoes(): any {
    return {
      'title': 'Variação do número de leitos ocupados',
      'width': 500,
      'height': 300
    }
  }

}