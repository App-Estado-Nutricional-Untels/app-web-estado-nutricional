import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/models/persona.interface';
import { UsuarioService } from 'src/app/services/api/usuario/usuario.service';
import { ApiErrorResponseMessageFactory } from 'src/app/utils/api-error-response-message-factory';

enum EliminarUsuarioModalEstados {
  CARGANDO,
  INICIAL
}

@Component({
  selector: 'app-eliminar-usuario-modal',
  templateUrl: './eliminar-usuario-modal.component.html',
  styleUrls: ['./eliminar-usuario-modal.component.css']
})
export class EliminarUsuarioModalComponent implements OnInit {

  public Estados = EliminarUsuarioModalEstados;

  @Input()
  modalId!: string;

  @Input()
  modalActions!: EventEmitter<string | MaterializeAction>;

  @Output()
  eliminado: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  persona: Persona | undefined;

  estado = EliminarUsuarioModalEstados.INICIAL;
  
  constructor(
    private _usuarioService: UsuarioService,
    private _toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  eliminarUsuario(): void {
    if (this.persona) {
      this.estado = EliminarUsuarioModalEstados.CARGANDO;
      this._usuarioService
        .eliminarUsuarioPorId(this.persona.usuario.id)
        .subscribe(
          (resp) => {
            this._toastrService.success(resp.mensaje);
            this.estado = EliminarUsuarioModalEstados.INICIAL;
            this.eliminado.emit(resp.mensaje);
            this.cerrarModal();
          },
          (respError) => {
            console.warn(respError);
            const msg = ApiErrorResponseMessageFactory.build(respError.error);
            this._toastrService.error(msg);
            this.estado = EliminarUsuarioModalEstados.INICIAL;
          }
        );
    }
  }

  cerrarModal(): void {
    this.modalActions.emit({action:"modal",params:['close']});
  }
}
