import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUsuarioService } from '../../data/app-usuario.service';
import { environment } from '../../../../environments/environment';
import { ApiPaths } from '../../../constants/api-paths.constant';
import { ReporteGrupalIMCParam } from '../../../models/request/params/reporte-grupal-imc-param.interface';

@Injectable({
  providedIn: 'root',
})
export class ImcService {
  constructor(
    private _http: HttpClient,
    private _appUsuarioService: AppUsuarioService
  ) {}

  obtenerEvolucionIMCPorId(id: number): Observable<any> {
    throw new Error('sin implementar');
  }

  obtenerListadoIMCGrupal(): Observable<any> {
    throw new Error('sin implementar');
  }

  obtenerReporteGrupalIMC(param: ReporteGrupalIMCParam): Observable<any> {
    throw new Error('sin implementar');
  }
}
