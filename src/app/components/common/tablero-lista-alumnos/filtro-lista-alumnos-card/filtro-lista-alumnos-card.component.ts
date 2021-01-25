import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ListadoAlumnosParam } from 'src/app/models/request/params/listado-alumnos-param.interface';

@Component({
  selector: 'app-filtro-lista-alumnos-card',
  templateUrl: './filtro-lista-alumnos-card.component.html',
  styleUrls: ['./filtro-lista-alumnos-card.component.css']
})
export class FiltroListaAlumnosCardComponent implements OnInit {

  @Output() filtrar = new EventEmitter<ListadoAlumnosParam>();
  
  formulario: ListadoAlumnosParam = {
    nombres: undefined,
    apePaterno: undefined,
    apeMaterno: undefined,
    dni: undefined,
    codigoUniversitario: undefined,
    edadMin: undefined,
    edadMax: undefined
  };

  constructor() { }

  ngOnInit(): void {
  }

  enviarFiltros(e: Event): void {
    e.preventDefault();
    this.filtrar.emit(this.formulario);
  }

}
