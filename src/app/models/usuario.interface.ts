import { Rol } from "./rol.interface";

export interface Usuario {
    id: number;
    correoElectronico: string;
    rol: Rol;
}