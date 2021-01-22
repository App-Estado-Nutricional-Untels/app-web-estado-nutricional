import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

declare const M: any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  parteRegistro: number = 1;

  constructor(private _toastr: ToastrService) { }

  siguienteParte(parte: number): void {
    this.parteRegistro = parte;
  }

  registrar(event: Event): void {
    event.preventDefault();
    this._toastr.error('Ocurrió un error');
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    M.AutoInit();
  }
}
