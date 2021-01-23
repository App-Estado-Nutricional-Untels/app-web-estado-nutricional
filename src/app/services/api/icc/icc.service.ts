import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiPaths } from 'src/app/constants/api-paths.constant';
import { IccMensualGrupal } from 'src/app/models/icc-mensual-grupal.interface';
import { IccMensual } from 'src/app/models/icc-mensual.interface';
import { ApiResponse } from 'src/app/models/response/api-response.interface';
import { HeaderFactory } from 'src/app/utils/header-factory';
import { environment } from 'src/environments/environment';
import { AppUsuarioService } from '../../data/app-usuario.service';

@Injectable({
  providedIn: 'root',
})
export class IccService {
  constructor(
    private _http: HttpClient,
    private _appUsuarioService: AppUsuarioService
  ) {}

  obtenerEvolucionICCPorId(id: number): Observable<any> {
    const url 
      = `${environment.baseUri}${ApiPaths.obtenerEvolucionICCPorId}`
        .replace(":id", `${id}`);
    const token = this._appUsuarioService.obtenerToken();
    const tipoToken = this._appUsuarioService.obtenerTipoToken();

    const headers = HeaderFactory.build(token, tipoToken);

    return this._http.get<ApiResponse<IccMensual>>(url, { headers: headers });
  }

  obtenerListadoICCGrupal(): Observable<ApiResponse<IccMensualGrupal>> {
    const url = `${environment.baseUri}${ApiPaths.obtenerListadoICCGrupal}`;
    const token = this._appUsuarioService.obtenerToken();
    const tipoToken = this._appUsuarioService.obtenerTipoToken();

    const headers = HeaderFactory.build(token, tipoToken);

    return this._http.get<ApiResponse<IccMensualGrupal>>(url, { headers: headers });
  }
}
