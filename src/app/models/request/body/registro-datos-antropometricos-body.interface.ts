export interface RegistroDatosAntropometricosBody {
    estatura: number;
    peso: number;
    contornoCintura: number;
    contornoCadera: number;
    actividadFisica: number;
    rendimientoAcademico: string;
    nivelEstres: string;
    fechaNacimiento?: string;
}