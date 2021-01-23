import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListadoAlumnosParam } from 'src/app/models/request/params/listado-alumnos-param.interface';
import { AppUsuarioService } from '../../data/app-usuario.service';
import { ApiPaths } from 'src/app/constants/api-paths.constant';
import { environment } from 'src/environments/environment';
import { HeaderFactory } from 'src/app/utils/header-factory';
import { ParamFactory } from 'src/app/utils/param-factory';
import { ApiResponse } from 'src/app/models/response/api-response.interface';
import { Alumno } from 'src/app/models/alumno.interface';
import { PorcentajeSexo } from 'src/app/models/porcentaje-sexo.interface';


@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  constructor(
    private _http: HttpClient,
    private _appUsuarioService: AppUsuarioService
  ) {}

  obtenerListadoAlumnos(param: ListadoAlumnosParam): Observable<ApiResponse<Alumno>> {
    const url = `${environment.baseUri}${ApiPaths.obtenerListadoAlumnos}`;
    const token = this._appUsuarioService.obtenerToken();
    const tipoToken = this._appUsuarioService.obtenerTipoToken();

    const headers = HeaderFactory.build(token, tipoToken);
    const params = ParamFactory.build<ListadoAlumnosParam>(param);

    return this._http.get<ApiResponse<Alumno>>(url, {
      headers: headers,
      params: params
    });
  }

  obtenerPorcentajeSexos(): Observable<ApiResponse<PorcentajeSexo>> {
    const url = `${environment.baseUri}${ApiPaths.obtenerPorcentajeSexos}`;
    const token = this._appUsuarioService.obtenerToken();
    const tipoToken = this._appUsuarioService.obtenerTipoToken();

    const headers = HeaderFactory.build(token, tipoToken);

    return this._http.get<ApiResponse<PorcentajeSexo>>(url, {
      headers: headers
    });
  }
}
