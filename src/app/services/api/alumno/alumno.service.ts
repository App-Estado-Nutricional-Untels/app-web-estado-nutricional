import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListadoAlumnosParam } from 'src/app/models/request/params/listado-alumnos-param.interface';
import { AppUsuarioService } from '../../data/app-usuario.service';
import { ApiPaths } from 'src/app/constants/api-paths.constant';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  constructor(
    private _http: HttpClient,
    private _appUsuarioService: AppUsuarioService
  ) {}

  obtenerListadoAlumnos(param: ListadoAlumnosParam): Observable<any> {
    const url = `${environment.baseUri}${ApiPaths.obtenerListadoAlumnos}`;
    const token = this._appUsuarioService.obtenerToken();
    const tipoToken = this._appUsuarioService.obtenerTipoToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${tipoToken} ${token}`,
    });
    const params = new HttpParams();
    if(param.nombres){
      params.append("nombres",param.nombres);
    }
    if(param.apePaterno){
      params.append("apePaterno",param.apePaterno);
    }
    if(param.apeMaterno){
      params.append("apeMaterno",param.apeMaterno);
    }
    if(param.dni){
      params.append("dni",param.dni);
    }
    if(param.codigoUniversitario){
      params.append("codigoUniversitario",param.codigoUniversitario);
    }
    if(param.edadMin){
      params.append("edadMin",param.edadMin);
    }
    if(param.edadMax){
      params.append("edadMax",param.edadMax);
    }

    return this._http.get(url, {
      headers: headers,
      params: params
    });
  }

  obtenerPorcentajeSexos(): Observable<any> {
    throw new Error('sin implementar');
  }
}
