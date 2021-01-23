import { AgrupadorAlumnos } from "./agrupado-alumnos.interface";

export interface ReporteRendimientoAcademico {
    Malo: AgrupadorAlumnos;
    Excelente: AgrupadorAlumnos;
    Pesimo: AgrupadorAlumnos;
    Bueno: AgrupadorAlumnos;
    Normal: AgrupadorAlumnos;
}