import { Error } from './error.interface';

export interface ErrorResponse {
  ok: boolean;
  errores: Error[];
}
