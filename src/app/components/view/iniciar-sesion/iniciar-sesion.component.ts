import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona.interface';
import { AppUsuarioService } from 'src/app/services/data/app-usuario.service';
import { AutenticacionService } from 'src/app/services/api/autenticacion/autenticacion.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  constructor(
    private _autenticacionService: AutenticacionService,
    private _appUsuarioService: AppUsuarioService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  iniciarSesion(e: Event) {
    const persona: Persona = this._autenticacionService.iniciarSesion();
    this._appUsuarioService.guardarPersonaAutenticada(persona);
    this._appUsuarioService.guardarToken("123");
    if (persona.usuario.rol.rolNombre === 'ROLE_ALUMNO') {
      this._router.navigate(["/principal/alumno"], {replaceUrl: true});
    }

    if (persona.usuario.rol.rolNombre === 'ROLE_ADMINISTRADOR') {
      this._router.navigate(["/principal/administrador"], {replaceUrl: true});
    }
    
    if (persona.usuario.rol.rolNombre === 'ROLE_MEDICO') {
      this._router.navigate(["/principal/medico"], {replaceUrl: true});
    }
  }

}
