import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';
import { AlumnoService } from 'src/app/services/api/alumno/alumno.service';

enum PorcentajeSexoEstado {
  VACIO,
  CARGANDO,
  CON_DATOS
}

@Component({
  selector: 'app-porcentaje-genero-alumnos-card',
  templateUrl: './porcentaje-genero-alumnos-card.component.html',
  styleUrls: ['./porcentaje-genero-alumnos-card.component.css']
})
export class PorcentajeGeneroAlumnosCardComponent implements OnInit {

  public Estados = PorcentajeSexoEstado;

  public estado: PorcentajeSexoEstado = PorcentajeSexoEstado.VACIO;

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public colores = [{
    backgroundColor:[
      'rgba(134, 199, 243, 1)',
      'rgba(255, 161, 181, 1)',
    ]
  }];

  constructor(
    private _AlumnoService: AlumnoService
  ) {}

  ngOnInit(): void {
    this.estado = PorcentajeSexoEstado.CARGANDO;
    this._AlumnoService
      .obtenerPorcentajeSexos()
      .subscribe(
        (resp) => {
          this.pieChartData.push(resp.datos.totalAlumnosMasculinos)
          this.pieChartData.push(resp.datos.totalAlumnosFemeninos)
          this.pieChartLabels.push("Masculino")
          this.pieChartLabels.push("Femenino")
          this.estado = PorcentajeSexoEstado.CON_DATOS;
        },
        (respError) => {
          console.warn(respError);
          this.estado = PorcentajeSexoEstado.VACIO;
        }
    );
  }

}
