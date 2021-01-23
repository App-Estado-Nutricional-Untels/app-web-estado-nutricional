import { Error } from './error.interface';

export interface ApiErrorResponse {
  ok: boolean;
  errores: Error[];
}
