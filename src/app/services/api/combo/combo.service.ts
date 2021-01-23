import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiPaths } from 'src/app/constants/api-paths.constant';
import { ApiResponse } from 'src/app/models/response/api-response.interface';
import { HeaderFactory } from 'src/app/utils/header-factory';
import { environment } from 'src/environments/environment';
import { AppUsuarioService } from '../../data/app-usuario.service';

@Injectable({
  providedIn: 'root',
})
export class ComboService {

  constructor(
    private _http: HttpClient,
    private _appUsuarioService: AppUsuarioService
  ) {}

  obtenerComboCategoriaICC(): Observable<ApiResponse<string[]>> {
    const url = `${environment.baseUri}${ApiPaths.obtenerComboCategoriaICC}`;
    const token = this._appUsuarioService.obtenerToken();
    const tipoToken = this._appUsuarioService.obtenerTipoToken();

    const headers = HeaderFactory.build(token, tipoToken);

    return this._http.get<ApiResponse<string[]>>(url, {
      headers: headers,
    });
  }

  obtenerComboCategoriaIMC(): Observable<ApiResponse<string[]>> {
    const url = `${environment.baseUri}${ApiPaths.obtenerComboCategoriaIMC}`;
    const token = this._appUsuarioService.obtenerToken();
    const tipoToken = this._appUsuarioService.obtenerTipoToken();

    const headers = HeaderFactory.build(token, tipoToken);

    return this._http.get<ApiResponse<string[]>>(url, {
      headers: headers,
    });
  }

  obtenerComboRol(): Observable<ApiResponse<string[]>> {
    const url = `${environment.baseUri}${ApiPaths.obtenerComboRol}`;
    const token = this._appUsuarioService.obtenerToken();
    const tipoToken = this._appUsuarioService.obtenerTipoToken();

    const headers = HeaderFactory.build(token, tipoToken);

    return this._http.get<ApiResponse<string[]>>(url, {
      headers: headers,
    });
  }

  obtenerComboSexo(): Observable<ApiResponse<string[]>> {
    const url = `${environment.baseUri}${ApiPaths.obtenerComboSexo}`;
    const token = this._appUsuarioService.obtenerToken();
    const tipoToken = this._appUsuarioService.obtenerTipoToken();

    const headers = HeaderFactory.build(token, tipoToken);

    return this._http.get<ApiResponse<string[]>>(url, {
      headers: headers,
    });
  }

  obtenerComboNivelEstres(): Observable<ApiResponse<string[]>> {
    const url = `${environment.baseUri}${ApiPaths.obtenerComboNivelEstres}`;
    const token = this._appUsuarioService.obtenerToken();
    const tipoToken = this._appUsuarioService.obtenerTipoToken();

    const headers = HeaderFactory.build(token, tipoToken);

    return this._http.get<ApiResponse<string[]>>(url, {
      headers: headers,
    });
  }

  obtenerComboRendimientoAcademico(): Observable<ApiResponse<string[]>> {
    const url = `${environment.baseUri}${ApiPaths.obtenerComboRendimientoAcademico}`;
    const token = this._appUsuarioService.obtenerToken();
    const tipoToken = this._appUsuarioService.obtenerTipoToken();

    const headers = HeaderFactory.build(token, tipoToken);

    return this._http.get<ApiResponse<string[]>>(url, {
      headers: headers,
    });
  }
}
