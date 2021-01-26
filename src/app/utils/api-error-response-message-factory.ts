import { ApiErrorResponse } from "../models/response/api-error-response.interface";
import { Error } from "../models/response/error.interface";

export abstract class ApiErrorResponseMessageFactory {
    static build(data: ApiErrorResponse): string {
        return ApiErrorResponseMessageFactory.buildFromErrores(data.errores);
    }

    static buildFromErrores(errores: Error[]): string {
      const mensajes = errores
          .map((err) => '<b>' + err.campo.toUpperCase() + ':</b> ' + err.mensaje)
          .reduce((prev, curr, i) => prev + curr + '<br>', '');

        return mensajes;
    }
}