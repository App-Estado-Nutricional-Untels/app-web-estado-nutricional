import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ImcMensual } from 'src/app/models/imc-mensual.interface';
import { ImcService } from 'src/app/services/api/imc/imc.service';

enum ImcAlumnoCardEstado {
  VACIO,
  CARGANDO,
  CON_DATOS
}

@Component({
  selector: 'app-imc-alumno-card',
  templateUrl: './imc-alumno-card.component.html',
  styleUrls: ['./imc-alumno-card.component.css']
})
export class ImcAlumnoCardComponent implements OnInit {

  @Input() idPersona: any;

  public Estados = ImcAlumnoCardEstado;

  public estado: ImcAlumnoCardEstado = ImcAlumnoCardEstado.VACIO;

  public listaImcMensual: ImcMensual[] = [];

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
  ) { 
    
  }

  actualizarChart(): void {
    this.chartDataSets.forEach(dataSet => {
      if (dataSet.data) {
        dataSet.data.length = 0;
        this.listaImcMensual
          .map(imcMensual => imcMensual.valorIMC)
          .forEach(valor => dataSet.data?.push(valor));
      }
    });

    this.chartLabels.length = 0;
    this.listaImcMensual
          .map(imcMensual => imcMensual.fechaRegistro)
          .forEach(fecha => this.chartLabels.push(fecha));
  }

  cargarInformacion(): void {
    this.estado = ImcAlumnoCardEstado.CARGANDO;
    this._imcService
      .obtenerEvolucionIMCPorIdPersona(this.idPersona)
      .subscribe(
        (resp) => {
          this.listaImcMensual = resp.datos;
          this.actualizarChart();
          this.estado = ImcAlumnoCardEstado.CON_DATOS;
        },
        (respError) => {
          console.warn(respError);
          this.estado = ImcAlumnoCardEstado.VACIO;
        }
    );
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChange): void {
    this.cargarInformacion();
  }

}
