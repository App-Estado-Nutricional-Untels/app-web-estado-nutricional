import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegistroBody } from 'src/app/models/request/body/registro-body.interface';
import { AutenticacionService } from 'src/app/services/api/autenticacion/autenticacion.service';
import { ApiErrorResponseMessageFactory } from 'src/app/utils/api-error-response-message-factory';

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
    private _autenticacionService: AutenticacionService,
    private _toastr: ToastrService,
  ) { }

  mostrarParte(parte: number): void {
    this.parteRegistro = parte;
  }

  mostrarParte2(): void {
    if (this.esValidoParte1()) {
      this.mostrarParte(2);
    }
  }

  selecionarRol(rol:string):void{
    this.formulario.rol= rol;
  }

  registrar(event: Event): void {
    event.preventDefault();
    this.estado = RegistroEstado.CARGANDO;
    this._autenticacionService
      .registro(this.formulario)
      .subscribe(
        (resp) => {
          this._toastr.success(resp.mensaje);
          this.estado = RegistroEstado.INICIAL;
          setTimeout(() => this._router.navigate(
            ["/iniciar-sesion"], {replaceUrl: true}), 2000);
        },
        (respError) => {
          console.warn(respError);
          const msg = ApiErrorResponseMessageFactory.build(respError.error);
          this._toastr.error(msg);
          this.estado = RegistroEstado.INICIAL;
        }
      );
  }

  esValidoParte1(): boolean {
    const errores = [];
    if (this.formulario.nombres === '') {
      errores.push({
        campo: 'nombres',
        mensaje: 'no debe estar vacío'
      });
    }

    if (this.formulario.apePaterno === '') {
      errores.push({
        campo: 'apePaterno',
        mensaje: 'no debe estar vacío'
      });
    }

    if (this.formulario.apeMaterno === '') {
      errores.push({
        campo: 'apeMaterno',
        mensaje: 'no debe estar vacío'
      });
    }

    if (this.formulario.correoElectronico === '') {
      errores.push({
        campo: 'correoElectronico',
        mensaje: 'no debe estar vacío'
      });
    }

    if (this.formulario.dni === '') {
      errores.push({
        campo: 'dni',
        mensaje: 'no debe estar vacío'
      });
    }

    if (errores.length > 0){
      this._toastr.error(ApiErrorResponseMessageFactory.buildFromErrores(errores));
      return false;
    }

    return true;
  }

  ngOnInit(): void {
  }
}
