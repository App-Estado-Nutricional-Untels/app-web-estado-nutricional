import { Component, Input, OnInit,SimpleChanges } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { ReporteRendimientoAcademico } from 'src/app/models/reporte-imc/reporte-rendimiento-academico.interface';

enum InformeImcGrupalPorcentajeRendimientoAcademicoCardEstados {
  VACIO,
  CARGANDO,
  CON_DATOS
}

@Component({
  selector: 'app-informe-imc-grupal-porcentaje-rendimiento-academico-card',
  templateUrl: './informe-imc-grupal-porcentaje-rendimiento-academico-card.component.html',
  styleUrls: ['./informe-imc-grupal-porcentaje-rendimiento-academico-card.component.css']
})
export class InformeImcGrupalPorcentajeRendimientoAcademicoCardComponent implements OnInit {

  @Input() reporteRendimientoAcademico: ReporteRendimientoAcademico | undefined;
  
  public Estados = InformeImcGrupalPorcentajeRendimientoAcademicoCardEstados;

  public estado: InformeImcGrupalPorcentajeRendimientoAcademicoCardEstados 
    = InformeImcGrupalPorcentajeRendimientoAcademicoCardEstados.VACIO;

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
      'rgba(18, 199, 243, 1)',
      'rgba(22, 161, 181, 1)', 
      'rgba(122, 190, 12, 1)',
      //OJO: Si hay mas de 2 datos, colocar mas colores
    ]
  }];

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.estado = InformeImcGrupalPorcentajeRendimientoAcademicoCardEstados.CARGANDO;
    if (this.reporteRendimientoAcademico) {
      this.pieChartData = [];
      this.pieChartData.push(this.reporteRendimientoAcademico.Bueno.totalAlumnos);
      this.pieChartData.push(this.reporteRendimientoAcademico.Excelente.totalAlumnos);
      this.pieChartData.push(this.reporteRendimientoAcademico.Malo.totalAlumnos);
      this.pieChartData.push(this.reporteRendimientoAcademico.Normal.totalAlumnos);
      this.pieChartData.push(this.reporteRendimientoAcademico.Pesimo.totalAlumnos);

      this.pieChartLabels = [];
      this.pieChartLabels.push('Bueno');
      this.pieChartLabels.push('Excelente');
      this.pieChartLabels.push('Malo');
      this.pieChartLabels.push('Normal');
      this.pieChartLabels.push('Pesimo');

      this.estado = InformeImcGrupalPorcentajeRendimientoAcademicoCardEstados.CON_DATOS;

    } else {
      this.estado = InformeImcGrupalPorcentajeRendimientoAcademicoCardEstados.VACIO;
    }
  }

}
