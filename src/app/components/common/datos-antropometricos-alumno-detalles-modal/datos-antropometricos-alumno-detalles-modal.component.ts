import { Component, EventEmitter, Input, OnInit, SimpleChanges } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { DatoAntropometrico } from 'src/app/models/dato-antropomentrico.interface';
import { StringUtils } from 'src/app/utils/string.util';

@Component({
  selector: 'app-datos-antropometricos-alumno-detalles-modal',
  templateUrl: './datos-antropometricos-alumno-detalles-modal.component.html',
  styleUrls: ['./datos-antropometricos-alumno-detalles-modal.component.css']
})
export class HistorialDatosAlumnoModalComponent implements OnInit {

  @Input()
  modalId!: string;

  @Input()
  modalActions!: EventEmitter<string | MaterializeAction>;

  @Input()
  datoAntropometrico: DatoAntropometrico | undefined;

  sugerenciaModalActions = new EventEmitter<string|MaterializeAction>();

  constructor() { }

  get categoriaIMC(): string | undefined {
    return StringUtils
      .upperSnakeCaseToCapitalizedSpaced(
        this.datoAntropometrico?.categoriaimc);
  }

  get categoriaICC(): string | undefined {
    return StringUtils
      .upperSnakeCaseToCapitalizedSpaced(
        this.datoAntropometrico?.categoriaicc);
  }

  get fechaRegistro(): string | undefined {
    if (this.datoAntropometrico) {
      return this.datoAntropometrico.fechaRegistro.split("T")[0];
    }
    return undefined;
  }

  get nivelEstres(): string | undefined {
    return StringUtils
      .upperSnakeCaseToCapitalizedSpaced(
        this.datoAntropometrico?.nivelEstres);
  }

  get rendimientoAcademico(): string | undefined {
    return StringUtils
      .upperSnakeCaseToCapitalizedSpaced(
        this.datoAntropometrico?.rendimientoAcademico);
  }

  abrirSugerenciaModal(): void {
    this.sugerenciaModalActions.emit({action:"modal",params:['open'],});
  }

  ngOnInit(): void {
    console.log("init detalles");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('update');
  }

}
