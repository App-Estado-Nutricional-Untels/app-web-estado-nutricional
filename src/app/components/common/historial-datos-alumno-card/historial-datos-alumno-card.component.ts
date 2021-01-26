import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { DatoAntropometrico } from 'src/app/models/dato-antropomentrico.interface';
import { DatosAntropometricosService } from 'src/app/services/api/datos-antropometricos/datos-antropometricos.service';

enum HistorialDatosAlumnoCardEstados {
  VACIO,
  CARGANDO,
  CON_DATOS
}

@Component({
  selector: 'app-historial-datos-alumno-card',
  templateUrl: './historial-datos-alumno-card.component.html',
  styleUrls: ['./historial-datos-alumno-card.component.css']
})
export class HistorialDatosAlumnoCardComponent implements OnInit {

  @Input()
  idPersona!: number | undefined;

  public Estados = HistorialDatosAlumnoCardEstados;

  public estado = HistorialDatosAlumnoCardEstados.VACIO;

  datoAntropometricoSeleccionado: DatoAntropometrico | undefined;
  datosAntropometricos: DatoAntropometrico[] = [];

  datosAntropometricosAlumnoDetallesModalActions = new EventEmitter<string|MaterializeAction>();

  constructor(
    private _historialDatosAntropometricos: DatosAntropometricosService
  ) { }

  abrirModal(indice: number): void {
    this.datoAntropometricoSeleccionado = this.datosAntropometricos[indice];
    this.datosAntropometricosAlumnoDetallesModalActions.emit({action:"modal",params:['open']});
  }

  ngOnInit(): void {
    if (this.idPersona) {
      this.estado = HistorialDatosAlumnoCardEstados.CARGANDO;
      this._historialDatosAntropometricos
      .obtenerHistorialDatosAntropometricosPorIdPersona(this.idPersona)
      .subscribe(
        (resp) => {
          this.datosAntropometricos = resp.datos;
          this.estado = HistorialDatosAlumnoCardEstados.CON_DATOS;
        },
        (respError) => {
          console.warn(respError);
          this.estado = HistorialDatosAlumnoCardEstados.VACIO;
        }
      );
    }
  }

}
