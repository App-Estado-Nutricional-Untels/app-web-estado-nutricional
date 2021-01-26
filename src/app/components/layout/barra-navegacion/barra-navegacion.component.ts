import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterializeAction } from 'angular2-materialize';
import { Persona } from 'src/app/models/persona.interface';
import { AppUsuarioService } from 'src/app/services/data/app-usuario.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  persona: Persona | null;

  datosPersonalesFormModalActions = new EventEmitter<string|MaterializeAction>();
  
  constructor(
    private _appUsuarioService: AppUsuarioService,
    private _router: Router
  ) { 
    this.persona = _appUsuarioService.obtenerPersonaAutenticada();
  }

  cerrarSesion(): void {
    this._appUsuarioService.eliminarStorage();
    this._router.navigate(["/"], {replaceUrl: true});
  }

  aPrincipal(): void {
    this._router.navigate(["/principal"]);
  }

  get esAlumno(): boolean {
    return this._appUsuarioService.obtenerRolNombre() === "ROLE_ALUMNO";
  }

  abrirDatosPersonalesFormModal(): void {
    this.datosPersonalesFormModalActions.emit({action:"modal",params:['open']});
  }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

}
