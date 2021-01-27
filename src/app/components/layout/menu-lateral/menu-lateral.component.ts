import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterializeAction } from 'angular2-materialize';
import { Persona } from 'src/app/models/persona.interface';
import { AppUsuarioService } from 'src/app/services/data/app-usuario.service';

declare const $:any;

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  @Input()
  menuId!: string;

  persona: Persona | null;

  datosPersonalesFormModalActions = new EventEmitter<string|MaterializeAction>();

  constructor(
    private _appUsuarioService: AppUsuarioService,
    private _router: Router,
  ) {
    this.persona = _appUsuarioService.obtenerPersonaAutenticada();
  }

  ngOnInit(): void {
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

  aRuta(ruta: string, event: Event): void {
    event.preventDefault();
    this._router.navigate([ruta]);
    $('.button-collapse').sideNav('hide');
  }

  abrirDatosPersonalesFormModal(e: Event): void {
    e.preventDefault();
    this.datosPersonalesFormModalActions.emit({action:"modal",params:['open']});
  }

  cerrarSesion(e: Event): void {
    e.preventDefault();
    this._appUsuarioService.eliminarStorage();
    window.location.replace("/");
  }
}
