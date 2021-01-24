import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DatoAntropometrico } from 'src/app/models/dato-antropomentrico.interface';
import { StringUtils } from 'src/app/utils/string.util';

declare const M: any;

@Component({
  selector: 'app-datos-antropometricos-alumno-detalles-modal',
  templateUrl: './datos-antropometricos-alumno-detalles-modal.component.html',
  styleUrls: ['./datos-antropometricos-alumno-detalles-modal.component.css']
})
export class HistorialDatosAlumnoModalComponent implements OnInit {

  @Input()
  modalId!: string;

  @Input()
  datoAntropometrico: DatoAntropometrico | undefined;

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

  ngOnInit(): void {
    M.updateTextFields();
  }

  ngOnChanges(changes: SimpleChanges) {
    M.updateTextFields();
    console.log('update');
  }

}
