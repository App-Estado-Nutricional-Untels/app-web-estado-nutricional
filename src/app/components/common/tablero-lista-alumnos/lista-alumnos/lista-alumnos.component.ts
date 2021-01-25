import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.interface';
import { ListadoAlumnosParam } from 'src/app/models/request/params/listado-alumnos-param.interface';
import { AlumnoService } from 'src/app/services/api/alumno/alumno.service';

declare const M:any;

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  listaAlumnos :Alumno[] = [];

  constructor(
    private _alumnoService: AlumnoService
  ) { }

  ngOnInit(): void { 
    M.AutoInit();
  }

  filtrarAlumnos(datos: ListadoAlumnosParam): void {

    this._alumnoService
      .obtenerListadoAlumnos(datos)
      .subscribe(
        (resp) => {
          this.listaAlumnos = resp.datos;
        },
        (respError) => {
          console.warn(respError);
        }
      );
  }
}
