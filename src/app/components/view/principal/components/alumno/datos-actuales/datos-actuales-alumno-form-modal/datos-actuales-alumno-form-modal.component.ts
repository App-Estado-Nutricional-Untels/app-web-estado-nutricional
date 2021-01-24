import { Component, Input, OnInit } from '@angular/core';
import { Combo } from 'src/app/models/combo/combo.interface';
import { RegistroDatosAntropometricosBody } from 'src/app/models/request/body/registro-datos-antropometricos-body.interface';
import { ComboService } from 'src/app/services/api/combo/combo.service';
import { DatosAntropometricosService } from 'src/app/services/api/datos-antropometricos/datos-antropometricos.service';

declare const M: any;

@Component({
  selector: 'app-datos-actuales-alumno-form-modal',
  templateUrl: './datos-actuales-alumno-form-modal.component.html',
  styleUrls: ['./datos-actuales-alumno-form-modal.component.css']
})
export class DatosActualesAlumnoFormModalComponent implements OnInit {
  // TODO: Terminar el componente
  @Input()
  modalId!: string;

  @Input()
  inicial!: boolean;

  comboNivelEstres: Combo[] = [];
  comboRendimientoAcademico: Combo[] = [];

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
  ) {
    
  }

  ngOnInit():void  {

  }

  ngAfterContentInit(): void {
    this._comboService.obtenerComboNivelEstres()
      .subscribe(
        (resp) => {
          this.comboNivelEstres = resp.datos
            .map(nivelEstres => {
              return {nombre: nivelEstres, valor: nivelEstres};
            });

          
        },
        (respError) => {
          console.warn(respError);
        }
      );

    this._comboService.obtenerComboRendimientoAcademico()
      .subscribe(
        (resp) => {
          this.comboRendimientoAcademico = resp.datos
            .map(rendAcademico => {
              return {nombre: rendAcademico, valor: rendAcademico};
            });
            this.formulario.rendimientoAcademico = this.comboRendimientoAcademico[0].valor;
        },
        (respError) => {
          console.warn(respError);
        }
      );
  }

}
