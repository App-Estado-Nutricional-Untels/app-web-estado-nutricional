import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { ReporteSexo } from 'src/app/models/reporte-imc/reporte-sexo.interface';

enum InformeImcGrupalPorcentajeGeneroAlumnosCardEstados {
  VACIO,
  CARGANDO,
  CON_DATOS
}

@Component({
  selector: 'app-informe-imc-grupal-porcentaje-genero-alumnos-card',
  templateUrl: './informe-imc-grupal-porcentaje-genero-alumnos-card.component.html',
  styleUrls: ['./informe-imc-grupal-porcentaje-genero-alumnos-card.component.css']
})
export class InformeImcGrupalPorcentajeGeneroAlumnosCardComponent implements OnInit {

  @Input() reporteSexo: ReporteSexo | undefined;

  public Estados = InformeImcGrupalPorcentajeGeneroAlumnosCardEstados;

  public estado: InformeImcGrupalPorcentajeGeneroAlumnosCardEstados 
    = InformeImcGrupalPorcentajeGeneroAlumnosCardEstados.VACIO;

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
      //OJO: Si hay mas de 2 datos, colocar mas colores
    ]
  }];

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    this.estado = InformeImcGrupalPorcentajeGeneroAlumnosCardEstados.CARGANDO;
    if (this.reporteSexo) {
      this.pieChartData.push(this.reporteSexo.masculino.porcentaje);
      this.pieChartData.push(this.reporteSexo.femenino.porcentaje);

      this.pieChartLabels.push('Masculino');
      this.pieChartLabels.push('Femenino');
      this.estado = InformeImcGrupalPorcentajeGeneroAlumnosCardEstados.CON_DATOS;

      console.log('aja');
    } else {
      this.estado = InformeImcGrupalPorcentajeGeneroAlumnosCardEstados.VACIO;
    }
  }

}
