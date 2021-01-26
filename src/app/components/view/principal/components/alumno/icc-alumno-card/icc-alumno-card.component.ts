import { Component,Input , OnInit, SimpleChange } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { IccMensual } from 'src/app/models/icc-mensual.interface';
import { IccService } from 'src/app/services/api/icc/icc.service';

enum IccAlumnoCardEstado {
  VACIO,
  CARGANDO,
  CON_DATOS
}

@Component({
  selector: 'app-icc-alumno-card',
  templateUrl: './icc-alumno-card.component.html',
  styleUrls: ['./icc-alumno-card.component.css']
})
export class IccAlumnoCardComponent implements OnInit {

  @Input() idPersona: any;

  public Estados = IccAlumnoCardEstado;

  public estado: IccAlumnoCardEstado = IccAlumnoCardEstado.VACIO;

  public listaIccMensual: IccMensual[] = [];

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
    private _iccService: IccService,
  ) { }

  actualizarChart(): void {
    this.chartDataSets.forEach(dataSet => {
      if (dataSet.data) {
        dataSet.data.length = 0;
        this.listaIccMensual
          .map(iccMensual => iccMensual.valorICC)
          .forEach(valor => dataSet.data?.push(valor));
      }
    });

    this.chartLabels.length = 0;
    this.listaIccMensual
          .map(iccMensual => iccMensual.fechaRegistro)
          .forEach(fecha => this.chartLabels.push(fecha));
  }
  
  cargarInformacion(): void {
    this.estado = IccAlumnoCardEstado.CARGANDO;
    this._iccService
      .obtenerEvolucionICCPorIdPersona(this.idPersona)
      .subscribe(
        (resp) => {
          this.listaIccMensual = resp.datos;
          this.actualizarChart();
          this.estado = IccAlumnoCardEstado.CON_DATOS;
        },
        (respError) => {
          console.warn(respError);
          this.estado = IccAlumnoCardEstado.VACIO;
        }
    );
  }
  
  ngOnInit(): void {
    this.cargarInformacion();
  }

  ngOnChanges(changes: SimpleChange): void {
    this.cargarInformacion();
  }
}
