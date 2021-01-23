import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.interface';
import { AppUsuarioService } from 'src/app/services/data/app-usuario.service';

@Component({
  selector: 'app-tablero-alumno',
  templateUrl: './tablero-alumno.component.html',
  styleUrls: ['./tablero-alumno.component.css']
})
export class TableroAlumnoComponent implements OnInit {

  personaAutenticada: Persona | null;

  constructor(
    private _appUsuarioService: AppUsuarioService
  ) { 
    this.personaAutenticada = _appUsuarioService.obtenerPersonaAutenticada();
  }

  ngOnInit(): void {
  }

}
