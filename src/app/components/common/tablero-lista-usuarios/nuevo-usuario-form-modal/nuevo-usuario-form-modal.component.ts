import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RegistroUsuarioBody } from 'src/app/models/request/body/registro-usuario-body.interface';
import { UsuarioService } from 'src/app/services/api/usuario/usuario.service';
import { ApiErrorResponseMessageFactory } from 'src/app/utils/api-error-response-message-factory';
import { format } from 'date-fns'
import { MaterializeAction } from 'angular2-materialize';
import { ApiErrorResponse } from 'src/app/models/response/api-error-response.interface';

enum NuevoUsuarioFormModalEstados {
  CARGANDO,
  INICIAL
}

@Component({
  selector: 'app-nuevo-usuario-form-modal',
  templateUrl: './nuevo-usuario-form-modal.component.html',
  styleUrls: ['./nuevo-usuario-form-modal.component.css']
})
export class NuevoUsuarioFormModalComponent implements OnInit {

  public Estados = NuevoUsuarioFormModalEstados;

  @Input()
  modalId!: string;

  @Input()
  modalActions!: EventEmitter<string | MaterializeAction>;

  estado = NuevoUsuarioFormModalEstados.INICIAL;

  formulario: RegistroUsuarioBody = {
    nombres: '',
    apePaterno: '',
    apeMaterno: '',
    correoElectronico: '',
    codigo: '',
    clave: '',
    dni: '',
    sexo: '',
    rol: '',
    fechaNacimiento: ''
  };

  constructor(
    private _usuarioService: UsuarioService,
    private _toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  registrarUsuario(e: Event): void {
    e.preventDefault();

    if (!this.esValido()) {
      return;
    }

    this.formulario.fechaNacimiento = format(Date.parse(this.formulario.fechaNacimiento), 'dd/MM/yyyy');

    this.estado = NuevoUsuarioFormModalEstados.CARGANDO;

    this._usuarioService
      .registroUsuarioGeneral(this.formulario)
      .subscribe(
        (resp) => {
          this.limpiarFormulario();

          this._toastrService.success(resp.mensaje);
          this.estado = NuevoUsuarioFormModalEstados.INICIAL;
        },
        (respError) => {
          console.warn(respError);
          const msg = ApiErrorResponseMessageFactory.build(respError.error);
          this._toastrService.error(msg);
          this.estado = NuevoUsuarioFormModalEstados.INICIAL;
        }
      );
  }

  esValido(): boolean {
    const errores = [];
    if (this.formulario.fechaNacimiento === '') {
      errores.push({
        campo: 'fechaNacimiento',
        mensaje: 'no debe estar vacío'
      });
    }

    if (errores.length > 0) {
      this._toastrService.error(
        ApiErrorResponseMessageFactory.buildFromErrores(errores));
      return false;
    }

    return true;
  }

  limpiarFormulario(): void {
    this.formulario.nombres = '';
    this.formulario.apePaterno = '';
    this.formulario.apeMaterno = '';
    this.formulario.clave = '';
    this.formulario.codigo = '';
    this.formulario.correoElectronico = '';
    this.formulario.dni = '';
    this.formulario.rol = '';
    this.formulario.fechaNacimiento = '';
  }

  cerrarModal(): void {
    this.limpiarFormulario();
    this.modalActions.emit({action:"modal",params:['close']});
  }

}
