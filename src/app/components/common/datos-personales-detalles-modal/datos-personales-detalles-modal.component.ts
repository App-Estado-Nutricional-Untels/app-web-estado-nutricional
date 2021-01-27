import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { Persona } from 'src/app/models/persona.interface';

@Component({
  selector: 'app-datos-personales-detalles-modal',
  templateUrl: './datos-personales-detalles-modal.component.html',
  styleUrls: ['./datos-personales-detalles-modal.component.css']
})
export class DatosPersonalesDetallesModalComponent implements OnInit {

  @Input()
  modalId!: string;

  @Input()
  modalActions!: EventEmitter<string | MaterializeAction>;

  @Input()
  persona: Persona | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

  get fechaNacimiento(): string | undefined {
    return this.persona?.fechaNacimiento?.split("T")[0];
  }

  cerrarModal(): void {
    this.modalActions.emit({action:"modal",params:['close']});
  }
}
