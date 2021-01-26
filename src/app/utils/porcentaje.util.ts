export abstract class PorcentajeUtils {
    static generarPorcentaje(cantidad: number, total: number): number {
        return (total === 0) ? 0 : ( cantidad / total ) * 100;
    }
}