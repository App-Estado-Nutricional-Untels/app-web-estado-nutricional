import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AngularDropdownModule } from 'angular-dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './components/view/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './components/view/registro/registro.component';
import { InicioComponent } from './components/view/inicio/inicio.component';
import { PrincipalComponent } from './components/view/principal/principal.component';
import { BarraNavegacionComponent } from './components/layout/barra-navegacion/barra-navegacion.component';
import { TableroAlumnoComponent } from './components/view/principal/components/alumno/tablero-alumno/tablero-alumno.component';
import { TableroMedicoComponent } from './components/view/principal/components/medico/tablero-medico/tablero-medico.component';
import { TableroAdministradorComponent } from './components/view/principal/components/administrador/tablero-administrador/tablero-administrador.component';
import { AutenticacionService } from './services/api/autenticacion/autenticacion.service';
import { AppUsuarioService } from './services/data/app-usuario.service';
import { DatosActualesAlumnoComponent } from './components/view/principal/components/alumno/datos-actuales/datos-actuales-alumno/datos-actuales-alumno.component';
import { EstadoActualAlumnoCardComponent } from './components/view/principal/components/alumno/estado-actual-alumno-card/estado-actual-alumno-card.component';
import { DatosActualesAlumnoCardComponent } from './components/view/principal/components/alumno/datos-actuales/datos-actuales-alumno-card/datos-actuales-alumno-card.component';
import { HistorialDatosAlumnoCardComponent } from './components/common/historial-datos-alumno-card/historial-datos-alumno-card.component';
import { ImcAlumnoCardComponent } from './components/view/principal/components/alumno/imc-alumno-card/imc-alumno-card.component';
import { IccAlumnoCardComponent } from './components/view/principal/components/alumno/icc-alumno-card/icc-alumno-card.component';
import { DatosActualesAlumnoFormModalComponent } from './components/view/principal/components/alumno/datos-actuales/datos-actuales-alumno-form-modal/datos-actuales-alumno-form-modal.component';
import { DatosPersonalesFormModalComponent } from './components/common/datos-personales-form-modal/datos-personales-form-modal.component';
import { MenuLateralComponent } from './components/layout/menu-lateral/menu-lateral.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { ListaAlumnosComponent } from './components/common/tablero-lista-alumnos/lista-alumnos/lista-alumnos.component';
import { FiltroListaAlumnosCardComponent } from './components/common/tablero-lista-alumnos/filtro-lista-alumnos-card/filtro-lista-alumnos-card.component';
import { NuevoAlumnoFormModalComponent } from './components/common/tablero-lista-alumnos/nuevo-alumno-form-modal/nuevo-alumno-form-modal.component';
import { DetallesActualesAlumnoModalComponent } from './components/detalles-actuales-alumno-modal/detalles-actuales-alumno-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/common/spinner/spinner.component';
import { ChartsModule } from 'ng2-charts';
import { ImcGrupalCardComponent } from './components/common/imc-grupal-card/imc-grupal-card.component';
import { IccGrupalCardComponent } from './components/common/icc-grupal-card/icc-grupal-card.component';
import { PorcentajeGeneroAlumnosCardComponent } from './components/common/porcentaje-genero-alumnos-card/porcentaje-genero-alumnos-card.component';
import { InformeImcGrupalCardComponent } from './components/common/informe-grupal-imc/informe-imc-grupal-card/informe-imc-grupal-card.component';
import { InformeImcGrupalModalComponent } from './components/common/informe-grupal-imc/informe-imc-grupal-modal/informe-imc-grupal-modal.component';
import { HistorialDatosAlumnoModalComponent } from './components/common/datos-antropometricos-alumno-detalles-modal/datos-antropometricos-alumno-detalles-modal.component';
import { SugerenciaModalComponent } from './components/common/sugerencia-modal/sugerencia-modal.component';
import { InformeImcGrupalPorcentajeGeneroAlumnosCardComponent } from './components/common/informe-grupal-imc/informe-imc-grupal-porcentaje-genero-alumnos-card/informe-imc-grupal-porcentaje-genero-alumnos-card.component';
import { InformeImcGrupalPorcentajeRendimientoAcademicoCardComponent } from './components/common/informe-grupal-imc/informe-imc-grupal-porcentaje-rendimiento-academico-card/informe-imc-grupal-porcentaje-rendimiento-academico-card.component';
import { InformeImcGrupalPorcentajeNivelEstresCardComponent } from './components/common/informe-grupal-imc/informe-imc-grupal-porcentaje-nivel-estres-card/informe-imc-grupal-porcentaje-nivel-estres-card.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    RegistroComponent,
    InicioComponent,
    PrincipalComponent,
    BarraNavegacionComponent,
    TableroAlumnoComponent,
    TableroMedicoComponent,
    TableroAdministradorComponent,
    DatosActualesAlumnoComponent,
    EstadoActualAlumnoCardComponent,
    DatosActualesAlumnoCardComponent,
    HistorialDatosAlumnoCardComponent,
    ImcAlumnoCardComponent,
    IccAlumnoCardComponent,
    DatosActualesAlumnoFormModalComponent,
    DatosPersonalesFormModalComponent,
    MenuLateralComponent,
    ListaUsuariosComponent,
    ListaAlumnosComponent,
    FiltroListaAlumnosCardComponent,
    NuevoAlumnoFormModalComponent,
    DetallesActualesAlumnoModalComponent,
    SpinnerComponent,
    ImcGrupalCardComponent,
    IccGrupalCardComponent,
    PorcentajeGeneroAlumnosCardComponent,
    InformeImcGrupalCardComponent,
    InformeImcGrupalModalComponent,
    HistorialDatosAlumnoModalComponent,
    SugerenciaModalComponent,
    InformeImcGrupalPorcentajeGeneroAlumnosCardComponent,
    InformeImcGrupalPorcentajeRendimientoAcademicoCardComponent,
    InformeImcGrupalPorcentajeNivelEstresCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    AngularDropdownModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    }),
  ],
  providers: [AutenticacionService, AppUsuarioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
