import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterializeAction } from 'angular2-materialize';
import { Persona } from 'src/app/models/persona.interface';
import { AppUsuarioService } from 'src/app/services/data/app-usuario.service';

declare const $:any;

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

  get esAlumno(): boolean {
    return this.persona?.usuario?.rol?.rolNombre === "ROLE_ALUMNO";
  }

  get esMedico(): boolean {
    return this.persona?.usuario?.rol?.rolNombre === "ROLE_MEDICO";
  }

  get esAdministrador(): boolean {
    return this.persona?.usuario?.rol?.rolNombre === "ROLE_ADMINISTRADOR";
  }

  get ruta(): string {
    let subruta = '';
    if (this.esAlumno) {
      subruta = '/alumno';
    } else if (this.esMedico) {
      subruta = '/medico';
    } else if (this.esAdministrador) {
      subruta = '/administrador';
    }

    return subruta;
  } 

  cerrarSesion(): void {
    this._appUsuarioService.eliminarStorage();
    window.location.replace("/");
  }

  aPrincipal(): void {
    this._router.navigate(["/principal" + this.ruta]);
  }

  abrirDatosPersonalesFormModal(): void {
    this.datosPersonalesFormModalActions.emit({action:"modal",params:['open']});
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $(".button-collapse").sideNav();
  }

}
