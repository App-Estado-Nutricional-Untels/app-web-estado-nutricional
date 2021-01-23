export interface ApiResponse<T> {
    ok: boolean;
    datos: T;
    mensaje: string;
}