import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Combo } from 'src/app/models/combo/combo.interface';
import { RegistroDatosAntropometricosBody } from 'src/app/models/request/body/registro-datos-antropometricos-body.interface';
import { ComboService } from 'src/app/services/api/combo/combo.service';
import { DatosAntropometricosService } from 'src/app/services/api/datos-antropometricos/datos-antropometricos.service';
import { ToastrService } from 'ngx-toastr';
import { ApiErrorResponseMessageFactory } from 'src/app/utils/api-error-response-message-factory';
import { MaterializeAction } from 'angular2-materialize';

enum DatosActualesAlumnoFormModalEstados {
  INICIAL,
  CARGANDO
}

@Component({
  selector: 'app-datos-actuales-alumno-form-modal',
  templateUrl: './datos-actuales-alumno-form-modal.component.html',
  styleUrls: ['./datos-actuales-alumno-form-modal.component.css']
})
export class DatosActualesAlumnoFormModalComponent implements OnInit {
  
  public Estados = DatosActualesAlumnoFormModalEstados;
  
  // FIXME: Cargar combos con la data de los servicios
  @Input()
  modalId!: string;

  @Input()
  inicial!: boolean;

  @Input()
  modalActions!: EventEmitter<string | MaterializeAction>;

  estado = DatosActualesAlumnoFormModalEstados.INICIAL;

  comboNivelEstres: Combo[] = [
    {
      nombre: "Leve",
      valor: "LEVE"
    },
    {
      nombre: "Moderado",
      valor: "MODERADO"
    },
    {
      nombre: "Severo",
      valor: "SEVERO"
    },
  ];

  comboRendimientoAcademico: Combo[] = [
    {
      nombre: "Excelente",
      valor: "EXCELENTE"
    },
    {
      nombre: "Bueno",
      valor: "BUENO"
    },
    {
      nombre: "Normal",
      valor: "NORMAL"
    },
    {
      nombre: "Malo",
      valor: "MALO"
    },
    {
      nombre: "Pésimo",
      valor: "PESIMO"
    },
  ];

  formulario: RegistroDatosAntropometricosBody = {
    actividadFisica: 0,
    contornoCadera: 0,
    contornoCintura: 0,
    estatura: 0,
    nivelEstres: '',
    peso: 0,
    rendimientoAcademico: '',
    fechaNacimiento: ''
  };

  constructor(
    private _comboService: ComboService,
    private _datosAntropometricosService: DatosAntropometricosService,
    private _toastrService: ToastrService
  ) {
  }

  registrarDatosActuales(e: Event): void {
    e.preventDefault();

    if (!this.esValido()) {
      return;
    }
    
    this.estado = DatosActualesAlumnoFormModalEstados.CARGANDO;

    if (this.inicial) {
      this._datosAntropometricosService
        .registroDatosAntropometricosInicialesAutenticado(this.formulario)
        .subscribe(
          (resp) => {
            this.cerrarModal();
            this._toastrService.success(resp.mensaje);
            this.estado = DatosActualesAlumnoFormModalEstados.INICIAL;
          },
          (respError) => {
            console.warn(respError.error);
            this._toastrService.error();
            this.estado = DatosActualesAlumnoFormModalEstados.INICIAL;
          }
        );
    } else {
      this._datosAntropometricosService
        .registroDatosAntropometricosAutenticado(this.formulario)
        .subscribe(
          (resp) => {
            this.cerrarModal();
            this._toastrService.success(resp.mensaje);
            this.estado = DatosActualesAlumnoFormModalEstados.INICIAL;
          },
          (respError) => {
            console.warn(respError.error);
            const msg = ApiErrorResponseMessageFactory.build(respError.error);
            this._toastrService.error(msg);
            this.estado = DatosActualesAlumnoFormModalEstados.INICIAL;
          }
        );
    }
  }

  esValido(): boolean {
    const errores = [];
    if (this.formulario.nivelEstres === ""){
      errores.push({
        campo: 'nivelEstrés',
        mensaje: 'no puede estar vacío'
      });
    }

    if (this.formulario.rendimientoAcademico === "") {
      errores.push({
        campo: 'rendimientoAcademico',
        mensaje: 'no puede estar vacío'
      });
    }

    if (errores.length > 0) {
      const msg = ApiErrorResponseMessageFactory.buildFromErrores(errores);
      this._toastrService.error(msg);
      return false;
    }

    return true;
  }

  limpiarFormulario(): void {
    this.formulario.actividadFisica = 0;
    this.formulario.contornoCadera = 0;
    this.formulario.contornoCintura = 0;
    this.formulario.estatura = 0;
    this.formulario.fechaNacimiento = '';
    this.formulario.nivelEstres = '';
    this.formulario.peso = 0;
    this.formulario.rendimientoAcademico = '';
  }

  cerrarModal(): void {
    this.limpiarFormulario();
    this.modalActions.emit({action:"modal",params:['close']});
  }

  ngOnInit():void  {
    // this._comboService.obtenerComboNivelEstres()
    //   .subscribe(
    //     (resp) => {
    //       this.comboNivelEstres = resp.datos
    //         .map(nivelEstres => {
    //           return {nombre: nivelEstres, valor: nivelEstres};
    //         });
    //       M.AutoInit();
    //     },
    //     (respError) => {
    //       console.warn(respError);
    //     }
    //   );

    // this._comboService.obtenerComboRendimientoAcademico()
    //   .subscribe(
    //     (resp) => {
    //       this.comboRendimientoAcademico = resp.datos
    //         .map(rendAcademico => {
    //           return {nombre: rendAcademico, valor: rendAcademico};
    //         });
    //         this.formulario.rendimientoAcademico = this.comboRendimientoAcademico[0].valor;
    //         console.log(this.selectRendimiento.nativeElement);
    //         M.FormSelect.init(document.getElementById(this.modalId + '-rendimiento-academico'));
    //         //M.AutoInit();
    //     },
    //     (respError) => {
    //       console.warn(respError);
    //     }
    //   );
  }

}
