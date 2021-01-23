import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUsuarioService } from '../../data/app-usuario.service';
import { environment } from '../../../../environments/environment';
import { ApiPaths } from '../../../constants/api-paths.constant';
import { ReporteGrupalIMCParam } from '../../../models/request/params/reporte-grupal-imc-param.interface';
import { HeaderFactory } from 'src/app/utils/header-factory';
import { ApiResponse } from 'src/app/models/response/api-response.interface';
import { ImcMensual } from 'src/app/models/imc-mensual.interface';
import { ImcMensualGrupal } from 'src/app/models/imc-mensual-grupal.interface';
import { ReporteImc } from 'src/app/models/reporte-imc/reporte-imc.interface';
import { ParamFactory } from 'src/app/utils/param-factory';

@Injectable({
  providedIn: 'root',
})
export class ImcService {
  constructor(
    private _http: HttpClient,
    private _appUsuarioService: AppUsuarioService
  ) {}

  obtenerEvolucionIMCPorId(id: number): Observable<ApiResponse<ImcMensual>> {
    const url 
      = `${environment.baseUri}${ApiPaths.obtenerEvolucionIMCPorId}`
        .replace(":id", `${id}`);
    const token = this._appUsuarioService.obtenerToken();
    const tipoToken = this._appUsuarioService.obtenerTipoToken();

    const headers = HeaderFactory.build(token, tipoToken);

    return this._http.get<ApiResponse<ImcMensual>>(url, { headers: headers });
  }

  obtenerListadoIMCGrupal(): Observable<ApiResponse<ImcMensualGrupal>> {
    const url = `${environment.baseUri}${ApiPaths.obtenerListadoIMCGrupal}`;
    const token = this._appUsuarioService.obtenerToken();
    const tipoToken = this._appUsuarioService.obtenerTipoToken();

    const headers = HeaderFactory.build(token, tipoToken);

    return this._http.get<ApiResponse<ImcMensualGrupal>>(url, { headers: headers });
  }

  obtenerReporteGrupalIMC(
    param: ReporteGrupalIMCParam
  ): Observable<ApiResponse<ReporteImc>> {
    const url = `${environment.baseUri}${ApiPaths.obtenerReporteGrupalIMC}`;
    const token = this._appUsuarioService.obtenerToken();
    const tipoToken = this._appUsuarioService.obtenerTipoToken();

    const headers = HeaderFactory.build(token, tipoToken);
    const params = ParamFactory.build<ReporteGrupalIMCParam>(param);

    return this._http.get<ApiResponse<ReporteImc>>(url, { 
      headers: headers, 
      params: params
    });
  }
}
