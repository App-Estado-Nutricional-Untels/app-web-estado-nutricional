import { Usuario } from "./usuario.interface";

export interface Persona {
    id: number;
    nombre: string;
    apepaterno: string;
    apematerno: string;
    sexo: string;
    dni: string;
    fechaNacimiento: Date;
    edad: number;
    usuario: Usuario;
}