import { Injectable } from '@angular/core';
import { Persona } from '../../../models/persona.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiPaths } from '../../../constants/api-paths.constant';
import { IniciarSesionBody } from 'src/app/models/request/body/iniciar-sesion-body.interface';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  constructor(private _http: HttpClient) {}

  iniciarSesion(body: IniciarSesionBody): Observable<any> {
    const url = `${environment.baseUri}${ApiPaths.iniciarSesion}`;

    return this._http.post(url, body);
  }

  registro(): void {}
}
