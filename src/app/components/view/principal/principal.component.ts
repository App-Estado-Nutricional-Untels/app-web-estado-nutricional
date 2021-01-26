import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona.interface';
import { AppUsuarioService } from 'src/app/services/data/app-usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  persona: Persona | null;

  constructor(
    private _appUsuarioService: AppUsuarioService,
    private _router: Router  
  ) {
    this.persona = _appUsuarioService.obtenerPersonaAutenticada();

    console.log(this._router.url);
    if (this.persona !== null && this._router.url === '/principal') {
      if (this.persona.usuario.rol.rolNombre === 'ROLE_ALUMNO') {
        this._router.navigate(["/principal/alumno"], {replaceUrl: true});
      }

      if (this.persona.usuario.rol.rolNombre === 'ROLE_ADMINISTRADOR') {
        this._router.navigate(["/principal/administrador"], {replaceUrl: true});
      }
      
      if (this.persona.usuario.rol.rolNombre === 'ROLE_MEDICO') {
        this._router.navigate(["/principal/medico"], {replaceUrl: true});
      }
    }
  }

  ngOnInit(): void {
  }

}
