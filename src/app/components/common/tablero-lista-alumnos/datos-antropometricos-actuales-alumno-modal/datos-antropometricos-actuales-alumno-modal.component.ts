import { Component, EventEmitter, Input, OnInit, SimpleChanges } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { ToastrService } from 'ngx-toastr';
import { DatoAntropometrico } from 'src/app/models/dato-antropomentrico.interface';
import { RegistroRecomendacionBody } from 'src/app/models/request/body/registro-recomendacion-body.interface';
import { DatosAntropometricosService } from 'src/app/services/api/datos-antropometricos/datos-antropometricos.service';
import { AppUsuarioService } from 'src/app/services/data/app-usuario.service';
import { ApiErrorResponseMessageFactory } from 'src/app/utils/api-error-response-message-factory';
import { StringUtils } from 'src/app/utils/string.util';

enum DatosAntropometricosActualesAlumnoEstados {
  VACIO,
  CARGANDO,
  CON_DATOS
}

@Component({
  selector: 'app-datos-antropometricos-actuales-alumno-modal',
  templateUrl: './datos-antropometricos-actuales-alumno-modal.component.html',
  styleUrls: ['./datos-antropometricos-actuales-alumno-modal.component.css']
})
export class DatosAntropometricosActualesAlumnoModalComponent implements OnInit {

  public Estados = DatosAntropometricosActualesAlumnoEstados;

  @Input()
  modalId!: string;

  @Input()
  idAlumno: number | undefined;

  @Input()
  modalActions!: EventEmitter<string | MaterializeAction>;

  datoAntropometrico: DatoAntropometrico | undefined;

  estado = DatosAntropometricosActualesAlumnoEstados.VACIO;

  recomendacion: string = '';
  rolNombre: string | undefined;
  
  constructor(
    private _datoAntropometricoService: DatosAntropometricosService,
    private _appUsuarioService: AppUsuarioService,
    private _toastrService: ToastrService
  ) {
    this.rolNombre = _appUsuarioService.obtenerRolNombre();
  }

  get categoriaIMC(): string | undefined {
    return StringUtils
      .upperSnakeCaseToCapitalizedSpaced(
        this.datoAntropometrico?.categoriaimc);
  }

  get categoriaICC(): string | undefined {
    return StringUtils
      .upperSnakeCaseToCapitalizedSpaced(
        this.datoAntropometrico?.categoriaicc);
  }

  get fechaRegistro(): string | undefined {
    if (this.datoAntropometrico) {
      return this.datoAntropometrico.fechaRegistro.split("T")[0];
    }
    return undefined;
  }

  get nivelEstres(): string | undefined {
    return StringUtils
      .upperSnakeCaseToCapitalizedSpaced(
        this.datoAntropometrico?.nivelEstres);
  }

  get rendimientoAcademico(): string | undefined {
    return StringUtils
      .upperSnakeCaseToCapitalizedSpaced(
        this.datoAntropometrico?.rendimientoAcademico);
  }

  get recomendacionVacia(): boolean {
    return this.recomendacion === '';
  }

  get daRecomendacion(): boolean {
    return this.rolNombre === 'ROLE_MEDICO';
  }

  registrarRecomendacion(e: Event): void {
    e.preventDefault();
    if (this.datoAntropometrico) {
      let formulario: RegistroRecomendacionBody = {
        datoAntropometricoId: this.datoAntropometrico.id,
        mensaje: this.recomendacion
      };
      
      this._datoAntropometricoService
        .registroRecomendacion(formulario)
        .subscribe(
          (resp) => {
            this.obtenerDatoAntropometrico();
            this._toastrService.success(resp.mensaje);
          },
          (respError) => {
            console.warn(respError);
            this._toastrService.error(ApiErrorResponseMessageFactory.build(respError.error));
          }
        );
    }
  }

  obtenerDatoAntropometrico(): void {
    if (this.idAlumno) {
      this.estado = DatosAntropometricosActualesAlumnoEstados.CARGANDO;
      this._datoAntropometricoService
      .obtenerDatosAntropometricosActualesPorIdAlumno(this.idAlumno)
      .subscribe(
        (resp) => {
          this.datoAntropometrico = resp.datos;
          this.estado = DatosAntropometricosActualesAlumnoEstados.CON_DATOS;
        },
        (respError) => {
          console.warn(respError);
          this.estado = DatosAntropometricosActualesAlumnoEstados.VACIO;
        }
      );
    }
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.obtenerDatoAntropometrico();
  }

}
