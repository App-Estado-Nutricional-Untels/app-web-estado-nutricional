import { Component, EventEmitter, Input, OnInit, SimpleChanges } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { Persona } from 'src/app/models/persona.interface';

@Component({
  selector: 'app-detalles-registros-alumno-modal',
  templateUrl: './detalles-registros-alumno-modal.component.html',
  styleUrls: ['./detalles-registros-alumno-modal.component.css']
})
export class DetallesRegistrosAlumnoModalComponent implements OnInit {

  @Input()
  modalId!: string;

  @Input()
  persona: Persona | undefined;

  @Input()
  modalActions!: EventEmitter<string | MaterializeAction>;
  
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
