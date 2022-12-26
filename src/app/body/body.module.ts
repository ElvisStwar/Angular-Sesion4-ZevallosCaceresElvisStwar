import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoComponent } from './contenido/contenido.component';
import { LateralComponent } from './lateral/lateral.component';



@NgModule({
  declarations: [
    ContenidoComponent,
    LateralComponent
  ],
  imports: [
    CommonModule
  ],
 
})
export class BodyModule { }
