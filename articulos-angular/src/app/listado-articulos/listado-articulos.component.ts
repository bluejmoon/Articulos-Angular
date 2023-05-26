import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-listado-articulos',
  templateUrl: './listado-articulos.component.html',
  styleUrls: ['./listado-articulos.component.scss']
})
export class ListadoArticulosComponent {
  @Input()favorites!:any[];
  @Output()clickButton = new EventEmitter();

  constructor(){}

  click(id:number){
    this.clickButton.emit(id);
  }
}
