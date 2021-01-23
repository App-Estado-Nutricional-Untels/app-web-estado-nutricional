import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DatoAntropometrico } from 'src/app/models/dato-antropomentrico.interface';

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

  ngOnInit(): void {
    M.updateTextFields();
  }

  ngOnChanges(changes: SimpleChanges) {
    M.updateTextFields();
    console.log('update');
  }

}
