import { Component, Input, OnInit } from '@angular/core';
import { ReporteEstres } from 'src/app/models/reporte-imc/reporte-estres.interface';

@Component({
  selector: 'app-informe-imc-grupal-porcentaje-nivel-estres-card',
  templateUrl: './informe-imc-grupal-porcentaje-nivel-estres-card.component.html',
  styleUrls: ['./informe-imc-grupal-porcentaje-nivel-estres-card.component.css']
})
export class InformeImcGrupalPorcentajeNivelEstresCardComponent implements OnInit {

  @Input() reporteEstres: ReporteEstres | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
