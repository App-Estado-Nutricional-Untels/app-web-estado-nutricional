import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-actuales-alumno-form-modal',
  templateUrl: './datos-actuales-alumno-form-modal.component.html',
  styleUrls: ['./datos-actuales-alumno-form-modal.component.css']
})
export class DatosActualesAlumnoFormModalComponent implements OnInit {

  @Input()
  modalId!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
