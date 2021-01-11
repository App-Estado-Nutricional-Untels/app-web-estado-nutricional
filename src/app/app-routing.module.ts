import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './vistas/base/base.component';
import { LoginComponent } from './vistas/login/login.component';
import { RegistrarseComponent } from './vistas/registrarse/registrarse.component';
import { InicioAlumnoComponent } from './vistas/inicio-alumno/inicio-alumno.component';
import { PerfilComponent } from './vistas/perfil/perfil.component';
import { SeleccionarComponent } from './vistas/seleccionar/seleccionar.component';
import { SeleccionarEspecialistaComponent } from './vistas/seleccionar-especialista/seleccionar-especialista.component';
import { SeleccionarEstudianteComponent } from './vistas/seleccionar-estudiante/seleccionar-estudiante.component';

const routes: Routes = [
  { path:'', redirectTo:'base', pathMatch:'full'},
  { path:'base', component:BaseComponent},
  { path:'login', component:LoginComponent},
  { path:'registrarse', component:RegistrarseComponent},
  { path:'inicioAlumno', component:InicioAlumnoComponent},
  { path:'perfil', component:PerfilComponent},
  { path:'seleccionar', component:SeleccionarComponent},
  { path:'seleccionarEsp', component:SeleccionarEspecialistaComponent},
  { path:'seleccionarEst', component:SeleccionarEstudianteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [BaseComponent, LoginComponent, RegistrarseComponent, InicioAlumnoComponent, PerfilComponent, 
                                  SeleccionarComponent, SeleccionarEspecialistaComponent, SeleccionarEstudianteComponent];
