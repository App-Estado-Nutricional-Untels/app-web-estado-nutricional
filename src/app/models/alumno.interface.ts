import { Persona } from "./persona.interface";

export interface Alumno {
    id: number;
    codigoUniversitario: string;
    persona: Persona;
}