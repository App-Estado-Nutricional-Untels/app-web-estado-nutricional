import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ImcMensualGrupal } from 'src/app/models/imc-mensual-grupal.interface';
import { ImcService } from 'src/app/services/api/imc/imc.service';

enum ImcGrupalCardEstado {
  VACIO,
  CARGANDO,
  CON_DATOS
}

@Component({
  selector: 'app-imc-grupal-card',
  templateUrl: './imc-grupal-card.component.html',
  styleUrls: ['./imc-grupal-card.component.css']
})
export class ImcGrupalCardComponent implements OnInit {

  public Estados = ImcGrupalCardEstado;

  public estado: ImcGrupalCardEstado = ImcGrupalCardEstado.VACIO;

  public listaIccMensual: ImcMensualGrupal[] = [];

  public chartDataSets: ChartDataSets[] = [
    { 
      data: [], 
      label: 'Valor Imc' 
    },
  ];

  public chartLabels: Label[] = [];

  public lineChartOptions: ChartOptions = {
    responsive: true,
  };

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];

  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(
    private _imcService: ImcService,
  ) { }

  actualizarChart(): void {
    this.chartDataSets.forEach(dataSet => {
      if (dataSet.data) {
        dataSet.data.length = 0;
        this.listaIccMensual
          .forEach(valor => dataSet.data?.push(valor.promedioIMC));
      }
    });

    this.chartLabels.length = 0;
    this.listaIccMensual
          .forEach(valor => this.chartLabels.push(String(valor.mes)+"/"+String(valor.anio)));
  }

  ngOnInit(): void {
    this.estado = ImcGrupalCardEstado.CARGANDO;
    this._imcService
      .obtenerListadoIMCGrupal()
      .subscribe(
        (resp) => {
          this.listaIccMensual = resp.datos;
          this.actualizarChart();
          this.estado = ImcGrupalCardEstado.CON_DATOS;
        },
        (respError) => {
          console.warn(respError);
          this.estado = ImcGrupalCardEstado.VACIO;
        }
    );
  }

}
