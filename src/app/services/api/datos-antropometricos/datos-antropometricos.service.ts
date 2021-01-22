import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppUsuarioService } from '../../data/app-usuario.service';
import { ApiPaths } from 'src/app/constants/api-paths.constant';
import { environment } from 'src/environments/environment';
import { RegistroDatosAntropometricosBody } from '../../../models/request/body/registro-datos-antropometricos-body.interface';
import { Observable } from 'rxjs';
import { RegistroRecomendacionBody } from '../../../models/request/body/registro-recomendacion-body.interface';

@Injectable({
  providedIn: 'root',
})
export class DatosAntropometricosService {
  constructor(
    private _http: HttpClient,
    private _appUsuarioService: AppUsuarioService
  ) {}

  registroDatosAntropometricosInicialesAutenticado(
    body: RegistroDatosAntropometricosBody
  ): Observable<any> {
    throw new Error('sin implementar');
  }

  registroDatosAntropometricosAutenticado(
    body: RegistroDatosAntropometricosBody
  ): Observable<any> {
    throw new Error('sin implementar');
  }

  registroRecomendacion(body: RegistroRecomendacionBody): Observable<any> {
    throw new Error('sin implementar');
  }

  obtenerDatosAntropometricosActualesPorId(id: number): Observable<any> {
    throw new Error('sin implementar');
  }

  obtenerHistorialDatosAntropometricosPorId(id: number): Observable<any> {
    throw new Error('sin implmentar');
  }
}
