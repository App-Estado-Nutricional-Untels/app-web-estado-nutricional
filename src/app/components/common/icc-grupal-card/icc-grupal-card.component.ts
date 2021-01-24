import { Component,Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { IccMensualGrupal } from 'src/app/models/icc-mensual-grupal.interface';
import { IccService } from 'src/app/services/api/icc/icc.service';

enum IccGrupalCardEstado {
  VACIO,
  CARGANDO,
  CON_DATOS
}

@Component({
  selector: 'app-icc-grupal-card',
  templateUrl: './icc-grupal-card.component.html',
  styleUrls: ['./icc-grupal-card.component.css']
})
export class IccGrupalCardComponent implements OnInit {

  public Estados = IccGrupalCardEstado;

  public estado: IccGrupalCardEstado = IccGrupalCardEstado.VACIO;

  public listaIccMensual: IccMensualGrupal[] = [];

  public chartDataSets: ChartDataSets[] = [
    { 
      data: [], 
      label: 'Valor Icc' 
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
    private _iccService: IccService
  ) { }
  
  actualizarChart(): void {
    this.chartDataSets.forEach(dataSet => {
      if (dataSet.data) {
        dataSet.data.length = 0;
        this.listaIccMensual
          .forEach(valor => dataSet.data?.push(valor.promedioICC));
      }
    });

    this.chartLabels.length = 0;
    this.listaIccMensual
          .forEach(valor => this.chartLabels.push(String(valor.mes)+"/"+String(valor.anio)));
  }

  ngOnInit(): void {
    this.estado = IccGrupalCardEstado.CARGANDO;
    this._iccService
      .obtenerListadoICCGrupal()
      .subscribe(
        (resp) => {
          this.listaIccMensual = resp.datos;
          this.actualizarChart();
          this.estado = IccGrupalCardEstado.CON_DATOS;
        },
        (respError) => {
          console.warn(respError);
          this.estado = IccGrupalCardEstado.VACIO;
        }
    );
  }

}
