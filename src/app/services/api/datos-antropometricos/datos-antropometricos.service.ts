import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppUsuarioService } from '../../data/app-usuario.service';
import { ApiPaths } from 'src/app/constants/api-paths.constant';
import { environment } from 'src/environments/environment';
import { RegistroDatosAntropometricosBody } from '../../../models/request/body/registro-datos-antropometricos-body.interface';
import { Observable } from 'rxjs';
import { RegistroRecomendacionBody } from '../../../models/request/body/registro-recomendacion-body.interface';
import { HeaderFactory } from 'src/app/utils/header-factory';
import { ApiResponse } from 'src/app/models/response/api-response.interface';
import { DatoAntropometrico } from 'src/app/models/dato-antropomentrico.interface';
import { Recomendacion } from 'src/app/models/recomendacion.interface';

@Injectable({
  providedIn: 'root',
})
export class DatosAntropometricosService {
  constructor(
    private _http: HttpClient,
    private _appUsuarioService: AppUsuarioService
  ) {}

  registroDatosAntropometricosInicialesAutenticado(
    body: RegistroDatosAntropometricosBody
  ): Observable<ApiResponse<any>> {
    const url 
      = `${environment.baseUri}${ApiPaths.registroDatosAntropometricosInicialesAutenticado}`;
    const token = this._appUsuarioService.obtenerToken();
    const tipoToken = this._appUsuarioService.obtenerTipoToken();

    const headers = HeaderFactory.build(token, tipoToken);

    return this._http.post<ApiResponse<any>>(url, body, { headers: headers });
  }

  registroDatosAntropometricosAutenticado(
    body: RegistroDatosAntropometricosBody
  ): Observable<ApiResponse<any>> {
    const url 
      = `${environment.baseUri}${ApiPaths.registroDatosAntropometricosAutenticado}`;
    const token = this._appUsuarioService.obtenerToken();
    const tipoToken = this._appUsuarioService.obtenerTipoToken();

    const headers = HeaderFactory.build(token, tipoToken);

    return this._http.post<ApiResponse<any>>(url, body, { headers: headers });
  }

  registroRecomendacion(
    body: RegistroRecomendacionBody
  ): Observable<ApiResponse<Recomendacion>> {
    const url = `${environment.baseUri}${ApiPaths.registroRecomendacion}`;
    const token = this._appUsuarioService.obtenerToken();
    const tipoToken = this._appUsuarioService.obtenerTipoToken();

    const headers = HeaderFactory.build(token, tipoToken);

    return this._http.post<ApiResponse<Recomendacion>>(url, body, { headers: headers });
  }

  obtenerDatosAntropometricosActualesPorIdAlumno(
    id: number
  ): Observable<ApiResponse<DatoAntropometrico>> {
    const url 
      = `${environment.baseUri}${ApiPaths.obtenerDatosAntropometricosActualesPorIdAlumno}`
        .replace(":id", `${id}`);
    const token = this._appUsuarioService.obtenerToken();
    const tipoToken = this._appUsuarioService.obtenerTipoToken();

    const headers = HeaderFactory.build(token, tipoToken);

    return this._http.get<ApiResponse<DatoAntropometrico>>(url, { headers: headers });
  }

  obtenerDatosAntropometricosActualesPorIdPersona(
    id: number
  ): Observable<ApiResponse<DatoAntropometrico>> {
    const url 
      = `${environment.baseUri}${ApiPaths.obtenerDatosAntropometricosActualesPorIdPersona}`
        .replace(":id", `${id}`);
    const token = this._appUsuarioService.obtenerToken();
    const tipoToken = this._appUsuarioService.obtenerTipoToken();

    const headers = HeaderFactory.build(token, tipoToken);

    return this._http.get<ApiResponse<DatoAntropometrico>>(url, { headers: headers });
  }

  obtenerHistorialDatosAntropometricosPorIdAlumno(
    id: number
  ): Observable<ApiResponse<DatoAntropometrico[]>> {
    const url 
      = `${environment.baseUri}${ApiPaths.obtenerHistorialDatosAntropometricosPorIdAlumno}`
        .replace(":id", `${id}`);
    const token = this._appUsuarioService.obtenerToken();
    const tipoToken = this._appUsuarioService.obtenerTipoToken();

    const headers = HeaderFactory.build(token, tipoToken);

    return this._http.get<ApiResponse<DatoAntropometrico[]>>(url, { headers: headers });
  }

  obtenerHistorialDatosAntropometricosPorIdPersona(
    id: number
  ): Observable<ApiResponse<DatoAntropometrico[]>> {
    const url 
      = `${environment.baseUri}${ApiPaths.obtenerHistorialDatosAntropometricosPorIdPersona}`
        .replace(":id", `${id}`);
    const token = this._appUsuarioService.obtenerToken();
    const tipoToken = this._appUsuarioService.obtenerTipoToken();

    const headers = HeaderFactory.build(token, tipoToken);

    return this._http.get<ApiResponse<DatoAntropometrico[]>>(url, { headers: headers });
  }
}
