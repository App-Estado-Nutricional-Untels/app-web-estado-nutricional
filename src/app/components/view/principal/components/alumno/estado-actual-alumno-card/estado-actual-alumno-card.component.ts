import { Component, Input, OnInit } from '@angular/core';
import { DatosAntropometricosService } from 'src/app/services/api/datos-antropometricos/datos-antropometricos.service';

enum EstadoActualEstado {
  VACIO,
  CARGANDO,
  CON_DATOS
}

@Component({
  selector: 'app-estado-actual-alumno-card',
  templateUrl: './estado-actual-alumno-card.component.html',
  styleUrls: ['./estado-actual-alumno-card.component.css']
})
export class EstadoActualAlumnoCardComponent implements OnInit {

  @Input() idPersona: any;

  public Estado = EstadoActualEstado;

  public estado = EstadoActualEstado.VACIO;

  public categoriaIMC: string = '';
  public categoriaICC: string = '';

  constructor(
    private _datosAntropometricosService: DatosAntropometricosService,
  ) {
    
  }

  ngOnInit(): void {
    this.estado = EstadoActualEstado.CARGANDO;
    this._datosAntropometricosService
      .obtenerDatosAntropometricosActualesPorIdPersona(this.idPersona)
      .subscribe(
        (resp) => {
          this.categoriaIMC = resp.datos.categoriaimc;
          this.categoriaICC = resp.datos.categoriaicc;
          this.estado = EstadoActualEstado.CON_DATOS;
        },
        (respError) => {
          this.estado = EstadoActualEstado.VACIO;
          console.warn(respError);
        }
      )
  }

}
