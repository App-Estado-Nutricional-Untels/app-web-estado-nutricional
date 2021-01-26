import { Component, EventEmitter, OnInit } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { Alumno } from 'src/app/models/alumno.interface';
import { ListadoAlumnosParam } from 'src/app/models/request/params/listado-alumnos-param.interface';
import { AlumnoService } from 'src/app/services/api/alumno/alumno.service';

enum ListaAlumnosEstados {
  VACIO,
  CARGANDO,
  CON_DATOS
}

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  public Estados = ListaAlumnosEstados;

  estado = ListaAlumnosEstados.VACIO;

  listaAlumnos :Alumno[] = [];

  nuevoAlumnoFormModalActions = new EventEmitter<string|MaterializeAction>();

  constructor(
    private _alumnoService: AlumnoService
  ) { }

  ngOnInit(): void { 
  }

  filtrarAlumnos(datos: ListadoAlumnosParam): void {
    this.estado = ListaAlumnosEstados.CARGANDO;
    this._alumnoService
      .obtenerListadoAlumnos(datos)
      .subscribe(
        (resp) => {
          this.listaAlumnos = resp.datos;
          this.estado = ListaAlumnosEstados.CON_DATOS;
        },
        (respError) => {
          console.warn(respError);
          this.estado = ListaAlumnosEstados.VACIO;
        }
      );
  }

  abrirNuevoAlumnoFormModal(): void {
    this.nuevoAlumnoFormModalActions.emit({action:"modal",params:['open']});
  }
}
