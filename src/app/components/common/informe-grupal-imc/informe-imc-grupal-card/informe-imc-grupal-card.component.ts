import { Component, EventEmitter, OnInit } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { ToastrService } from 'ngx-toastr';
import { Combo } from 'src/app/models/combo/combo.interface';
import { ReporteImc } from 'src/app/models/reporte-imc/reporte-imc.interface';
import { ReporteGrupalIMCParam } from 'src/app/models/request/params/reporte-grupal-imc-param.interface';
import { ImcService } from 'src/app/services/api/imc/imc.service';
import { ApiErrorResponseMessageFactory } from 'src/app/utils/api-error-response-message-factory';
import { StringUtils } from 'src/app/utils/string.util';

enum InformeImcGrupalCardEstados {
  VACIO,
  CARGANDO,
  CON_DATOS
}

@Component({
  selector: 'app-informe-imc-grupal-card',
  templateUrl: './informe-imc-grupal-card.component.html',
  styleUrls: ['./informe-imc-grupal-card.component.css']
})
export class InformeImcGrupalCardComponent implements OnInit {

  public Estados = InformeImcGrupalCardEstados;
  public estado = InformeImcGrupalCardEstados.VACIO;

  informeImcGrupalModalActions = new EventEmitter<string|MaterializeAction>();

  comboCategoriaIMC: Combo[] = [
    {
      nombre: "DELGADEZ GRADO III",
      valor: "DELGADEZ_GRADO_III"
    },
    {
      nombre: "DELGADEZ GRADO II",
      valor: "DELGADEZ_GRADO_II"
    },
    {
      nombre: "DELGADEZ GRADO I",
      valor: "DELGADEZ_GRADO_I"
    },
    {
      nombre: "NORMAL",
      valor: "NORMAL"
    },
    {
      nombre: "OBESIDAD GRADO I",
      valor: "OBESIDAD_GRADO_I"
    },
    {
      nombre: "OBESIDAD GRADO II",
      valor: "OBESIDAD_GRADO_II"
    },
    {
      nombre: "OBESIDAD GRADO III",
      valor: "OBESIDAD_GRADO_III"
    },
  ];

  comboMes: Combo[] = [
    {
      nombre: "Enero",
      valor: "1"
    },
    {
      nombre: "Febrero",
      valor: "2"
    },
    {
      nombre: "Marzo",
      valor: "3"
    },
    {
      nombre: "Abril",
      valor: "4"
    },
    {
      nombre: "Mayo",
      valor: "5"
    },
    {
      nombre: "Junio",
      valor: "6"
    },
    {
      nombre: "Julio",
      valor: "7"
    },
    {
      nombre: "Agosto",
      valor: "8"
    },
    {
      nombre: "Septiembre",
      valor: "9"
    },
    {
      nombre: "Octubre",
      valor: "10"
    },
    {
      nombre: "Noviembre",
      valor: "11"
    },
    {
      nombre: "Diciembre",
      valor: "12"
    },
  ];

  formulario: ReporteGrupalIMCParam = {
    categoriaIMC: "",
    anio: new Date().getFullYear(),
    mes: 1
  };

  reporteIMC: ReporteImc | undefined;

  constructor(
    private _imcService: ImcService,
    private _toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  buscarInforme(e: Event): void {
    e.preventDefault();

    this.estado = InformeImcGrupalCardEstados.CARGANDO;
    this._imcService
      .obtenerReporteGrupalIMC(this.formulario)
      .subscribe(
        (resp) => {
          console.log(resp);
          this.reporteIMC = resp.datos;
          this.estado = InformeImcGrupalCardEstados.CON_DATOS;
        },
        (respError) => {
          console.warn(respError);
          const msg = ApiErrorResponseMessageFactory.build(respError.error);
          this._toastrService.error(msg);
          this.estado = InformeImcGrupalCardEstados.VACIO;
        }
      );
  }

  get categoriaIMC(): string | undefined {
    return StringUtils
      .upperSnakeCaseToCapitalizedSpaced(
          this.reporteIMC?.categoriaIMC);
  }

  get porcentajeAlumnos(): number | undefined {
    return (this.reporteIMC) ? this.reporteIMC?.porcentajeAlumnos * 100 : undefined;
  }

  abrirInformeImcGrupalModal(): void {
    this.informeImcGrupalModalActions.emit({action:"modal",params:['open']});
  }

}
