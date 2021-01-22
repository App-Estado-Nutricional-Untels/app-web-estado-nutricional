import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiPaths } from 'src/app/constants/api-paths.constant';
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
    throw new Error('sin implementar');
  }

  obtenerListadoICCGrupal(): Observable<any> {
    throw new Error('sin implementar');
  }
}
