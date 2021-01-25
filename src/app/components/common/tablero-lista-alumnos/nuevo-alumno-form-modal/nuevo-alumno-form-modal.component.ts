import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-alumno-form-modal',
  templateUrl: './nuevo-alumno-form-modal.component.html',
  styleUrls: ['./nuevo-alumno-form-modal.component.css']
})
export class NuevoAlumnoFormModalComponent implements OnInit {

  @Input()
  modalId!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
