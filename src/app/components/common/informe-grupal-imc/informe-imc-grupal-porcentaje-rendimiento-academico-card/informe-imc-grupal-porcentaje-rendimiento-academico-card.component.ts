import { Component, Input, OnInit } from '@angular/core';
import { ReporteRendimientoAcademico } from 'src/app/models/reporte-imc/reporte-rendimiento-academico.interface';

@Component({
  selector: 'app-informe-imc-grupal-porcentaje-rendimiento-academico-card',
  templateUrl: './informe-imc-grupal-porcentaje-rendimiento-academico-card.component.html',
  styleUrls: ['./informe-imc-grupal-porcentaje-rendimiento-academico-card.component.css']
})
export class InformeImcGrupalPorcentajeRendimientoAcademicoCardComponent implements OnInit {

  @Input() reporteRendimientoAcademico: ReporteRendimientoAcademico | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
