import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-sugerencia-modal',
  templateUrl: './sugerencia-modal.component.html',
  styleUrls: ['./sugerencia-modal.component.css']
})
export class SugerenciaModalComponent implements OnInit {

  @Input()
  modalId!: string;

  @Input()
  modalActions!: EventEmitter<string | MaterializeAction>;

  @Input() sugerencia: string | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
