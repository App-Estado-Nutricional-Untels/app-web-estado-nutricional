import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableroAdministradorComponent } from './components/view/principal/components/administrador/tablero-administrador/tablero-administrador.component';
import { TableroAlumnoComponent } from './components/view/principal/components/alumno/tablero-alumno/tablero-alumno.component';
import { IniciarSesionComponent } from './components/view/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './components/view/inicio/inicio.component';
import { ListaAlumnosComponent } from './components/common/tablero-lista-alumnos/lista-alumnos/lista-alumnos.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { TableroMedicoComponent } from './components/view/principal/components/medico/tablero-medico/tablero-medico.component';
import { PrincipalComponent } from './components/view/principal/principal.component';
import { RegistroComponent } from './components/view/registro/registro.component';
import { AdministradorGuardaService } from './services/guardas/administrador-guarda.service';
import { AlumnoGuardaService } from './services/guardas/alumno-guarda.service';
import { AutenticacionGuardaService } from './services/guardas/autenticacion-guarda.service';
import { MedicoGuardaService } from './services/guardas/medico-guarda.service';

const routes: Routes = [
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'inicio', component: InicioComponent },
  { 
    path: 'principal', 
    component: PrincipalComponent,
    canActivate:[AutenticacionGuardaService],
    children: [
      {path: '', redirectTo: 'principal', pathMatch: "full"},
      {
        path: 'alumno', 
        component: TableroAlumnoComponent,
        canActivateChild: [AutenticacionGuardaService, AlumnoGuardaService]
      },
      {
        path: 'medico', 
        component: TableroMedicoComponent, 
        canActivateChild: [AutenticacionGuardaService, MedicoGuardaService]
      },
      {path: 
        'administrador', 
        component: TableroAdministradorComponent, 
        canActivateChild: [AutenticacionGuardaService, AdministradorGuardaService]
      },
      {
        path: 'lista-usuarios', 
        component: ListaUsuariosComponent, 
        canActivateChild: [
          AutenticacionGuardaService,
          AdministradorGuardaService,
          MedicoGuardaService
        ]
      },
      {
        path: 'lista-alumnos', 
        component: ListaAlumnosComponent, 
        canActivateChild: [
          AutenticacionGuardaService,
          AdministradorGuardaService,
          MedicoGuardaService
        ]
      },
    ]
  },
  { path: '**', component: InicioComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
