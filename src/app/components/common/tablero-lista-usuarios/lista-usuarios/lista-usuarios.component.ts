import { Component, EventEmitter, OnInit } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { Persona } from 'src/app/models/persona.interface';
import { ListadoPersonasParam } from 'src/app/models/request/params/listado-personas-param.interface';
import { PersonaService } from 'src/app/services/api/persona/persona.service';

enum ListaUsuariosEstados {
  VACIO,
  CARGANDO,
  CON_DATOS
}

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  public Estados = ListaUsuariosEstados;

  estado = ListaUsuariosEstados.VACIO;

  listaPersonas :Persona[] = [];

  nuevoUsuarioFormModalActions = new EventEmitter<string|MaterializeAction>();

  constructor(
    private _personaService: PersonaService
  ) { }

  ngOnInit(): void {

  }

  filtrarUsuarios(datos: ListadoPersonasParam): void {
    this.estado = ListaUsuariosEstados.CARGANDO;
    this._personaService
      .obtenerListadoPersonas(datos)
      .subscribe(
        (resp) => {
          this.listaPersonas = resp.datos;
          this.estado = ListaUsuariosEstados.CON_DATOS;
        },
        (respError) => {
          console.warn(respError);
          this.estado = ListaUsuariosEstados.VACIO;
        }
      );
  }

  abrirNuevoUsuarioFormModal(): void {
    this.nuevoUsuarioFormModalActions.emit({action:"modal",params:['open']});
  }
}
