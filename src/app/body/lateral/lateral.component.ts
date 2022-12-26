import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.css']
})
export class LateralComponent {

  //nombreHijo = 'Piero';

  @Input() nombreHijo = "Piero";
  @Output() cambioDeNombreHijo = new EventEmitter<string>();

  cambiarNombreHijo(){
    this.nombreHijo  = 'Alonso';
    this.cambioDeNombreHijo.emit(this.nombreHijo);
  }

}
