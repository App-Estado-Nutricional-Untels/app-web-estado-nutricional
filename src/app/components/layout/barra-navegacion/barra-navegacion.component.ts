import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppUsuarioService } from 'src/app/services/data/app-usuario.service';

declare const M: any;

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  constructor(
    private _appUsuarioService: AppUsuarioService,
    private _router: Router
  ) { }

  cerrarSesion(): void {
    this._appUsuarioService.eliminarStorage();
    this._router.navigate(["/"], {replaceUrl: true});
  }

  aPrincipal(): void {
    this._router.navigate(["/principal"]);
  }

  get noEsAlumno(): boolean {
    return this._appUsuarioService.obtenerRolNombre() === "ROLE_ALUMNO";
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    M.AutoInit();
    M.updateTextFields();
  }

}
