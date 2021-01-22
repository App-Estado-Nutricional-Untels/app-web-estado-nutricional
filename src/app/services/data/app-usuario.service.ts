import { Injectable } from '@angular/core';
import { Persona } from '../../models/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class AppUsuarioService {

  private _personaAutenticadaKey = "personaAutenticada";
  private _tokenKey = "token";

  constructor() { }

  guardarPersonaAutenticada(persona: Persona): void {
    localStorage.setItem(this._personaAutenticadaKey, JSON.stringify(persona));
  }
  
  guardarToken(token: string): void {
    localStorage.setItem(this._tokenKey, token);
  }

  obtenerPersonaAutenticada(): Persona | null {
    const personaString = localStorage.getItem(this._personaAutenticadaKey);
    return (personaString != null) ? JSON.parse(personaString) : null;
  }

  obtenerToken(): string | null {
    return localStorage.getItem(this._tokenKey);
  }

  eliminarStorage(): void {
    localStorage.removeItem(this._tokenKey);
    localStorage.removeItem(this._personaAutenticadaKey);
  }

  estaAutenticado(): boolean {
    return this.obtenerPersonaAutenticada() != null;
  }

  obtenerRolNombre(): string | undefined {
    return this.obtenerPersonaAutenticada()?.usuario?.rol?.rolNombre;
  }
}
