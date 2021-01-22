import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, RouterStateSnapshot, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AppUsuarioService } from '../data/app-usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuardaService implements CanActivate,CanActivateChild {

  constructor(
    private _appUsuarioService: AppUsuarioService,
    private _router: Router
  ) { 

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if(this._appUsuarioService.estaAutenticado()){
      return true;
    }
    this._router.navigate(["/"]);
    return false;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if(this._appUsuarioService.estaAutenticado()){
      return true;
    }
    this._router.navigate(["/"]);
    return false;
  }
}
