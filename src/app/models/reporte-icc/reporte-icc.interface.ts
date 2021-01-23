import { ReporteEstres } from "../reporte-imc/reporte-estres.interface";
import { ReporteRendimientoAcademico } from "../reporte-imc/reporte-rendimiento-academico.interface";
import { ReporteSexo } from "../reporte-imc/reporte-sexo.interface";

export interface ReporteIcc {
    categoriaICC: string;
    mes: number;
    anio: number;
    totalAlumnos: number;
    porcentajeAlumnos: number;
    edadPromedio: number;
    actividadFisicaPromedio: number;
    sexo: ReporteSexo;
    estres: ReporteEstres;
    rendimientoAcademico: ReporteRendimientoAcademico;
    mensajeClasificacion: string;
}