import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sugerencia-modal',
  templateUrl: './sugerencia-modal.component.html',
  styleUrls: ['./sugerencia-modal.component.css']
})
export class SugerenciaModalComponent implements OnInit {

  @Input()
  modalId!: string;

  @Input() sugerencia: string | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
