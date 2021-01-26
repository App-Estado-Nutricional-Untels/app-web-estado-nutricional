import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona.interface';
import { AppUsuarioService } from 'src/app/services/data/app-usuario.service';
import { AutenticacionService } from 'src/app/services/api/autenticacion/autenticacion.service';
import { IniciarSesionBody } from '../../../models/request/body/iniciar-sesion-body.interface';
import { ToastrService } from 'ngx-toastr';
import { ApiErrorResponseMessageFactory } from 'src/app/utils/api-error-response-message-factory';

enum IniciarSesionEstado {
  INICIAL,
  CARGANDO
}

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css'],
})
export class IniciarSesionComponent implements OnInit {
  
  public Estados = IniciarSesionEstado;

  estado: IniciarSesionEstado = IniciarSesionEstado.INICIAL;

  formulario: IniciarSesionBody = {
    correoElectronico: '',
    clave: '',
  };

  constructor(
    private _autenticacionService: AutenticacionService,
    private _appUsuarioService: AppUsuarioService,
    private _router: Router,
    private _toastr: ToastrService,
  ) {}

  ngOnInit(): void {}

  iniciarSesion(e: Event) {
    e.preventDefault();
    this.estado = IniciarSesionEstado.CARGANDO;
    this._autenticacionService.iniciarSesion(this.formulario).subscribe(
      (resp) => {
        this.estado = IniciarSesionEstado.INICIAL;
        const persona: Persona = resp.datos.persona;

        this._appUsuarioService.guardarPersonaAutenticada(persona);
        this._appUsuarioService.guardarToken(resp.token);
        this._appUsuarioService.guardarTipoToken(resp.tipoToken);

        if (persona.usuario.rol.rolNombre === 'ROLE_ALUMNO') {
          this._router.navigate(['/principal/alumno'], { replaceUrl: true });
        }

        if (persona.usuario.rol.rolNombre === 'ROLE_ADMINISTRADOR') {
          this._router.navigate(['/principal/administrador'], {
            replaceUrl: true,
          });
        }

        if (persona.usuario.rol.rolNombre === 'ROLE_MEDICO') {
          this._router.navigate(['/principal/medico'], { replaceUrl: true });
        }
      },
      (resp) => {
        this.estado = IniciarSesionEstado.INICIAL;
        const mensajes = ApiErrorResponseMessageFactory.build(resp.error);
        this._toastr.error(mensajes);
      }
    );
  }
}
