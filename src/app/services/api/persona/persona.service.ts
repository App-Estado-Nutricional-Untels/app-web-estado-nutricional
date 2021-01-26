import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiPaths } from 'src/app/constants/api-paths.constant';
import { Persona } from 'src/app/models/persona.interface';
import { ListadoPersonasParam } from 'src/app/models/request/params/listado-personas-param.interface';
import { ApiResponse } from 'src/app/models/response/api-response.interface';
import { HeaderFactory } from 'src/app/utils/header-factory';
import { ParamFactory } from 'src/app/utils/param-factory';
import { environment } from 'src/environments/environment';
import { AppUsuarioService } from '../../data/app-usuario.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(
    private _http: HttpClient,
    private _appUsuarioService: AppUsuarioService
  ) {}

  obtenerListadoPersonas(
    param: ListadoPersonasParam
  ): Observable<ApiResponse<Persona[]>> {
    const url = `${environment.baseUri}${ApiPaths.obtenerListadoPersonas}`;
    const token = this._appUsuarioService.obtenerToken();
    const tipoToken = this._appUsuarioService.obtenerTipoToken();

    const headers = HeaderFactory.build(token, tipoToken);
    const params = ParamFactory.build<ListadoPersonasParam>(param);

    return this._http.get<ApiResponse<Persona[]>>(url, { 
      headers: headers,
      params: params
    });
  }
}
