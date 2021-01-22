import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-personales-form-modal',
  templateUrl: './datos-personales-form-modal.component.html',
  styleUrls: ['./datos-personales-form-modal.component.css']
})
export class DatosPersonalesFormModalComponent implements OnInit {

  @Input()
  modalId!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
