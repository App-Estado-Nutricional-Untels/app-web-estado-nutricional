import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUsuarioService } from '../../data/app-usuario.service';
import { ListadoUsuariosParam } from 'src/app/models/request/params/listado-usuarios-param.interface';
import { RegistroUsuarioBody } from '../../../models/request/body/registro-usuario-body.interface';
import { RegistroUsuarioAlumnoBody } from '../../../models/request/body/registro-usuario-alumno-body.interface';
import { ActualizarUsuarioBody } from '../../../models/request/body/actualizar-usuario-body.interface';
import { environment } from 'src/environments/environment';
import { ApiPaths } from 'src/app/constants/api-paths.constant';
import { HeaderFactory } from 'src/app/utils/header-factory';
import { ApiResponse } from 'src/app/models/response/api-response.interface';
import { Usuario } from 'src/app/models/usuario.interface';
import { Persona } from 'src/app/models/persona.interface';
import { ParamFactory } from 'src/app/utils/param-factory';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(
    private _http: HttpClient,
    private _appUsuarioService: AppUsuarioService
  ) {}

  obtenerListadoUsuarios(
    param: ListadoUsuariosParam
  ): Observable<ApiResponse<Usuario[]>> {
    const url = `${environment.baseUri}${ApiPaths.obtenerListadoUsuarios}`;
    const token = this._appUsuarioService.obtenerToken();
    const tipoToken = this._appUsuarioService.obtenerTipoToken();

    const headers = HeaderFactory.build(token, tipoToken);
    const params = ParamFactory.build<ListadoUsuariosParam>(param);

    return this._http.get<ApiResponse<Usuario[]>>(url, { 
      headers: headers,
      params: params
    });
  }

  registroUsuarioGeneral(
    body: RegistroUsuarioBody
  ): Observable<ApiResponse<Usuario>> {
    const url = `${environment.baseUri}${ApiPaths.registroUsuarioGeneral}`;
    const token = this._appUsuarioService.obtenerToken();
    const tipoToken = this._appUsuarioService.obtenerTipoToken();

    const headers = HeaderFactory.build(token, tipoToken);

    return this._http.post<ApiResponse<Usuario>>(url, body, { headers: headers });
  }

  registroUsuarioAlumno(
    body: RegistroUsuarioAlumnoBody
  ): Observable<ApiResponse<Usuario>> {
    const url = `${environment.baseUri}${ApiPaths.registroUsuarioAlumno}`;
    const token = this._appUsuarioService.obtenerToken();
    const tipoToken = this._appUsuarioService.obtenerTipoToken();

    const headers = HeaderFactory.build(token, tipoToken);

    return this._http.post<ApiResponse<Usuario>>(url, body, { headers: headers });
  }

  actualizarUsuarioAutenticado(
    body: ActualizarUsuarioBody
  ): Observable<ApiResponse<Persona>> {
    const url = `${environment.baseUri}${ApiPaths.actualizarUsuarioAutenticado}`;
    const token = this._appUsuarioService.obtenerToken();
    const tipoToken = this._appUsuarioService.obtenerTipoToken();

    const headers = HeaderFactory.build(token, tipoToken);

    return this._http.post<ApiResponse<Persona>>(url, body, { headers: headers });
  }

  eliminarUsuarioAlumnoPorId(id: number): Observable<ApiResponse<Usuario>> {
    const url 
      = `${environment.baseUri}${ApiPaths.eliminarUsuarioAlumnoPorId}`
        .replace(":id", `${id}`);
    const token = this._appUsuarioService.obtenerToken();
    const tipoToken = this._appUsuarioService.obtenerTipoToken();

    const headers = HeaderFactory.build(token, tipoToken);

    return this._http.delete<ApiResponse<Usuario>>(url, { headers: headers });
  }

  eliminarUsuarioPorId(id: number): Observable<ApiResponse<Usuario>> {
    const url 
      = `${environment.baseUri}${ApiPaths.eliminarUsuarioPorId}`
        .replace(":id", `${id}`);
    const token = this._appUsuarioService.obtenerToken();
    const tipoToken = this._appUsuarioService.obtenerTipoToken();

    const headers = HeaderFactory.build(token, tipoToken);

    return this._http.delete<ApiResponse<Usuario>>(url, { headers: headers });
  }
}
