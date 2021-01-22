import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUsuarioService } from '../../data/app-usuario.service';
import { ListadoUsuariosParam } from 'src/app/models/request/params/listado-usuarios-param.interface';
import { RegistroUsuarioBody } from '../../../models/request/body/registro-usuario-body.interface';
import { RegistroUsuarioAlumnoBody } from '../../../models/request/body/registro-usuario-alumno-body.interface';
import { ActualizarUsuarioBody } from '../../../models/request/body/actualizar-usuario-body.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(
    private _http: HttpClient,
    private _appUsuarioService: AppUsuarioService
  ) {}

  obtenerListadoUsuarios(param: ListadoUsuariosParam): Observable<any> {
    throw new Error('not Implemented');
  }

  registroUsuarioGeneral(body: RegistroUsuarioBody): Observable<any> {
    throw new Error('not Implemented');
  }

  registroUsuarioAlumno(body: RegistroUsuarioAlumnoBody): Observable<any> {
    throw new Error('not Implemented');
  }

  actualizarUsuarioAutenticado(body: ActualizarUsuarioBody): Observable<any> {
    throw new Error('not Implemented');
  }

  eliminarUsuarioAlumnoPorId(id: number): Observable<any> {
    throw new Error('not Implemented');
  }

  eliminarUsuarioPorId(id: number): Observable<any> {
    throw new Error('not Implemented');
  }
}
