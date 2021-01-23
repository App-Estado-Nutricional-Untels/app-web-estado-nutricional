import { Recomendacion } from "./recomendacion.interface";

export interface DatoAntropometrico {
    id: number;
    estatura: number;
    peso: number;
    contornoCintura: number;
    contornoCadera: number;
    nivelEstres: string;
    actividadFisica: number;
    rendimientoAcademico: string;
    fechaRegistro: string;
    valorIMC: number;
    valorICC: number;
    categoriaimc: string;
    categoriaicc: string;
    recomendacion: Recomendacion | null | undefined;
}