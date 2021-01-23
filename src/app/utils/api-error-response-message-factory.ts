import { ApiErrorResponse } from "../models/response/api-error-response.interface";

export abstract class ApiErrorResponseMessageFactory {
    static build(data: ApiErrorResponse): string {
        const mensajes = data.errores
          .map((err) => err.mensaje)
          .reduce((prev, curr, i) => curr + ' ' + prev, '');

        return mensajes;
    } 
}