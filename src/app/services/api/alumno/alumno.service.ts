import { HttpClient } from '@angular/common/http';
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
    throw new Error('sin implementar');
  }

  obtenerPorcentajeSexos(): Observable<any> {
    throw new Error('sin implementar');
  }
}
