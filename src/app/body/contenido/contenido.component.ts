import { Component } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent {

  nombre:string = 'Elvis';

  cambiarNombre (){
    this.nombre = 'Stwar'
  }
}
