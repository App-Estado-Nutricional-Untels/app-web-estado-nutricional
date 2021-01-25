import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.interface';
import { ListadoUsuariosParam } from 'src/app/models/request/params/listado-usuarios-param.interface';
import { UsuarioService } from 'src/app/services/api/usuario/usuario.service';

declare const M:any;

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  listaPersonas :Persona[] = [];

  constructor(
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    M.AutoInit();
  }

  filtrarUsuarios(datos: ListadoUsuariosParam): void {

    // this._usuarioService
    //   .obtenerListadoUsuarios(datos)
    //   .subscribe(
    //     (resp) => {
    //       this.listaPersonas = resp.datos;
    //     },
    //     (respError) => {
    //       console.warn(respError);
    //     }
    //   );
  }

}
