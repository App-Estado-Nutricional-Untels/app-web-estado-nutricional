import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Combo } from 'src/app/models/combo/combo.interface';
import { RegistroDatosAntropometricosBody } from 'src/app/models/request/body/registro-datos-antropometricos-body.interface';
import { ComboService } from 'src/app/services/api/combo/combo.service';
import { DatosAntropometricosService } from 'src/app/services/api/datos-antropometricos/datos-antropometricos.service';
import { ToastrService } from 'ngx-toastr';
import { ApiErrorResponseMessageFactory } from 'src/app/utils/api-error-response-message-factory';

declare const M: any;

@Component({
  selector: 'app-datos-actuales-alumno-form-modal',
  templateUrl: './datos-actuales-alumno-form-modal.component.html',
  styleUrls: ['./datos-actuales-alumno-form-modal.component.css']
})
export class DatosActualesAlumnoFormModalComponent implements OnInit {
  // FIXME: Cargar combos con la data de los servicios
  @Input()
  modalId!: string;

  @Input()
  inicial!: boolean;

  @ViewChild('selectRendimiento') selectRendimiento: any;

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
    
    if (this.inicial) {
      this._datosAntropometricosService
        .registroDatosAntropometricosInicialesAutenticado(this.formulario)
        .subscribe(
          (resp) => {
            this._toastrService.success(resp.mensaje);
          },
          (respError) => {
            console.warn(respError.error);
            this._toastrService.error()
          }
        );
    } else {
      this._datosAntropometricosService
        .registroDatosAntropometricosAutenticado(this.formulario)
        .subscribe(
          (resp) => {
            this._toastrService.success(resp.mensaje);
          },
          (respError) => {
            console.warn(respError.error);
            const msg = ApiErrorResponseMessageFactory.build(respError.error);
            this._toastrService.error(msg)
          }
        );
    }
  }

  esValido(): boolean {
    const errores = [];
    if (this.formulario.nivelEstres === ""){
      errores.push('El campo nivel estrés no puede estar vacío');
    }

    if (this.formulario.rendimientoAcademico === "") {
      errores.push('El campo rendimiento académico no puede estar vacío');
    }

    if (errores.length > 0) {
      const msg = errores.reduce((prev, curr, i) =>  prev + curr + "<br/>", "");
      this._toastrService.error(msg, '', {enableHtml: true});
      return false;
    }

    return true;
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
