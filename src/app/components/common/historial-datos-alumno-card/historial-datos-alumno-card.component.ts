import { Component, Input, OnInit } from '@angular/core';
import { DatoAntropometrico } from 'src/app/models/dato-antropomentrico.interface';
import { DatosAntropometricosService } from 'src/app/services/api/datos-antropometricos/datos-antropometricos.service';

declare const M: any;

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
  idPersona!: number;

  public Estados = HistorialDatosAlumnoCardEstados;

  public estado = HistorialDatosAlumnoCardEstados.VACIO;

  datoAntropometricoSeleccionado: DatoAntropometrico | undefined;
  datosAntropometricos: DatoAntropometrico[] = [];

  constructor(
    private _historialDatosAntropometricos: DatosAntropometricosService
  ) { }

  abrirModal(indice: number): void {
    this.datoAntropometricoSeleccionado = this.datosAntropometricos[indice];
  }

  ngOnInit(): void {
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
