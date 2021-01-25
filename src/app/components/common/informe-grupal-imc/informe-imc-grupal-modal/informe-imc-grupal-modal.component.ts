import { Component, Input, OnInit } from '@angular/core';
import { ReporteImc } from 'src/app/models/reporte-imc/reporte-imc.interface';

@Component({
  selector: 'app-informe-imc-grupal-modal',
  templateUrl: './informe-imc-grupal-modal.component.html',
  styleUrls: ['./informe-imc-grupal-modal.component.css']
})
export class InformeImcGrupalModalComponent implements OnInit {

  @Input()
  modalId!: string;

  @Input() reporteIMC: ReporteImc | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
