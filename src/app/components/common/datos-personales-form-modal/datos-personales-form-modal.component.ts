import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/models/persona.interface';
import { ActualizarUsuarioBody } from 'src/app/models/request/body/actualizar-usuario-body.interface';
import { UsuarioService } from 'src/app/services/api/usuario/usuario.service';
import { AppUsuarioService } from 'src/app/services/data/app-usuario.service';
import { ApiErrorResponseMessageFactory } from 'src/app/utils/api-error-response-message-factory';

@Component({
  selector: 'app-datos-personales-form-modal',
  templateUrl: './datos-personales-form-modal.component.html',
  styleUrls: ['./datos-personales-form-modal.component.css']
})
export class DatosPersonalesFormModalComponent implements OnInit {

  personaActual: Persona | null | undefined;

  formulario: ActualizarUsuarioBody = {
    apePaterno: '',
    apeMaterno: '',
    nombres: ''
  }

  @Input()
  modalId!: string;
  
  constructor(
    private _appUsuarioService: AppUsuarioService,
    private _usuarioService: UsuarioService,
    private _toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.personaActual = this._appUsuarioService.obtenerPersonaAutenticada();
    this.formulario.apePaterno = this.personaActual?.apepaterno ?? '';
    this.formulario.apeMaterno = this.personaActual?.apematerno ?? '';
    this.formulario.nombres = this.personaActual?.nombre ?? '';
  }

  actualizarUsuario(e: Event): void {
    e.preventDefault();

    this._usuarioService
      .actualizarUsuarioAutenticado(this.formulario)
      .subscribe(
        (resp) => {
          console.log(resp);
          this._appUsuarioService.guardarPersonaAutenticada(resp.datos);
          window.location.reload();
        },
        (respError) => {
          console.warn(respError);
          const msg = ApiErrorResponseMessageFactory.build(respError.error);
          this._toastrService.error(msg);
        }
      );
  }

  get fechaNacimiento(): string | undefined {
    return this.personaActual?.fechaNacimiento?.split("T")[0];
  }

  get haCambiado(): boolean {
    return !(this.formulario.apePaterno === this.personaActual?.apepaterno &&
      this.formulario.apeMaterno === this.personaActual?.apematerno &&
      this.formulario.nombres === this.personaActual?.nombre);
  }
}
