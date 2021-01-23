import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiPaths } from '../../../constants/api-paths.constant';
import { IniciarSesionBody } from 'src/app/models/request/body/iniciar-sesion-body.interface';
import { RegistroBody } from '../../../models/request/body/registro-body.interface';
import { IniciarSesionResponse } from 'src/app/models/response/iniciar-sesion-response.interface';
import { ApiResponse } from 'src/app/models/response/api-response.interface';
import { Usuario } from 'src/app/models/usuario.interface';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  constructor(private _http: HttpClient) {}

  iniciarSesion(body: IniciarSesionBody): Observable<IniciarSesionResponse> {
    const url = `${environment.baseUri}${ApiPaths.iniciarSesion}`;
    return this._http.post<IniciarSesionResponse>(url, body);
  }

  registro(body: RegistroBody): Observable<ApiResponse<Usuario>> {
    const url = `${environment.baseUri}${ApiPaths.registro}`;
    return this._http.post<ApiResponse<Usuario>>(url, body);
  }
}
