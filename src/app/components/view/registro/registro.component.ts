import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegistroBody } from 'src/app/models/request/body/registro-body.interface';

enum RegistroEstado {
  INICIAL,
  CARGANDO
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public Estados = RegistroEstado;

  parteRegistro: number = 1;

  estado: RegistroEstado = RegistroEstado.INICIAL;

  formulario: RegistroBody = {
    nombres: '',
    apePaterno: '',
    apeMaterno: '',
    correoElectronico: '',
    dni: '',
    sexo: '',
    rol: '',
    codigo: '',
    clave: ''
  };

  constructor(
    private _router: Router,
    private _toastr: ToastrService) { }

  siguienteParte(parte: number): void {
    this.parteRegistro = parte;
  }
  selecionarRol(rol:string):void{
    this.formulario.rol= rol;
  }
  registrar(event: Event): void {
    event.preventDefault();
    this.estado = RegistroEstado.CARGANDO;
    this._toastr.error('Ocurrió un error');
    console.log(this.formulario);
  }

  ngOnInit(): void {
  }
}
