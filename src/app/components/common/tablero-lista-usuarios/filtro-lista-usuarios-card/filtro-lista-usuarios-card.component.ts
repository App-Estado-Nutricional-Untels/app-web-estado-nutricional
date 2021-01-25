import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ListadoUsuariosParam } from 'src/app/models/request/params/listado-usuarios-param.interface';

@Component({
  selector: 'app-filtro-lista-usuarios-card',
  templateUrl: './filtro-lista-usuarios-card.component.html',
  styleUrls: ['./filtro-lista-usuarios-card.component.css']
})
export class FiltroListaUsuariosCardComponent implements OnInit {

  @Output() filtrar = new EventEmitter<ListadoUsuariosParam>();
  
  formulario: ListadoUsuariosParam = {
    nombres: undefined,
    apePaterno: undefined,
    apeMaterno: undefined,
    dni: undefined,
    correoElectronico: undefined,
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
