import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  @Input()
  menuId!: string;

  @Input()
  sideNavActions!: EventEmitter<any | MaterializeAction>;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  aRuta(ruta: string, event: Event): void {
    event.preventDefault();
    this._router.navigate([ruta]);
  }
}
