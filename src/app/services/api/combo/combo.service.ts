import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiPaths } from 'src/app/constants/api-paths.constant';
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

  obtenerComboRendimientoAcademico(): Observable<any> {
    const url = `${environment.baseUri}${ApiPaths.obtenerComboRendimientoAcademico}`;
    const token = this._appUsuarioService.obtenerToken();
    const tipoToken = this._appUsuarioService.obtenerTipoToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${tipoToken} ${token}`,
    });

    return this._http.get(url, {
      headers: headers,
    });
  }
}
