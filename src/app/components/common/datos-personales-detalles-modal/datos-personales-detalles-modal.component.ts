import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

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
  
  constructor() { }

  ngOnInit(): void {
  }

}
