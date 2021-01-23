import { IniciarSesionDatos } from "./iniciar-sesion-datos.interface";

export interface IniciarSesionResponse {
    ok: boolean;
    datos: IniciarSesionDatos;
    token: string;
    tipoToken: string;
}