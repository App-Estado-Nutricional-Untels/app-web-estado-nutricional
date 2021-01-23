import { ReporteEstres } from "./reporte-estres.interface";
import { ReporteRendimientoAcademico } from "./reporte-rendimiento-academico.interface";
import { ReporteSexo } from "./reporte-sexo.interface";

export interface ReporteImc {
    categoriaIMC: string;
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