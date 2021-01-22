import { Injectable } from '@angular/core';
import { Persona } from '../../../models/persona.interface';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  constructor() {}

  iniciarSesion(): Persona {
    return {
      id: 1,
      nombre: 'ignacio',
      apepaterno: 'rueda',
      apematerno: 'boada',
      dni: '74536965',
      edad: 23,
      fechaNacimiento: new Date(),
      sexo: 'M',
      usuario: {
        id: 2,
        correoElectronico: 'correo@email.com',
        rol: {
          id: 1,
          rolNombre: 'ROLE_MEDICO',
        },
      },
    };
  }

  registro(): void {}
}
