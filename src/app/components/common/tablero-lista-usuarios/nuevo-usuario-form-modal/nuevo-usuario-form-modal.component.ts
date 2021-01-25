import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Combo } from 'src/app/models/combo/combo.interface';
import { RegistroUsuarioBody } from 'src/app/models/request/body/registro-usuario-body.interface';
import { UsuarioService } from 'src/app/services/api/usuario/usuario.service';
import { ApiErrorResponseMessageFactory } from 'src/app/utils/api-error-response-message-factory';
import { compareAsc, format } from 'date-fns'

@Component({
  selector: 'app-nuevo-usuario-form-modal',
  templateUrl: './nuevo-usuario-form-modal.component.html',
  styleUrls: ['./nuevo-usuario-form-modal.component.css']
})
export class NuevoUsuarioFormModalComponent implements OnInit {

  @Input()
  modalId!: string;

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

    console.log(this.formulario.fechaNacimiento);
    this.formulario.fechaNacimiento = format(Date.parse(this.formulario.fechaNacimiento), 'dd/MM/yyyy');

    console.log(this.formulario);

    this._usuarioService
      .registroUsuarioGeneral(this.formulario)
      .subscribe(
        (resp) => {
          this.formulario.nombres = '';
          this.formulario.apePaterno = '';
          this.formulario.apeMaterno = '';
          this.formulario.clave = '';
          this.formulario.codigo = '';
          this.formulario.correoElectronico = '';
          this.formulario.dni = '';
          this.formulario.rol = '';
          this.formulario.fechaNacimiento = '';

          this._toastrService.success(resp.mensaje);
        },
        (respError) => {
          console.warn(respError);
          const msg = ApiErrorResponseMessageFactory.build(respError.error);
          this._toastrService.error(msg);
        }
      );
  }

}
