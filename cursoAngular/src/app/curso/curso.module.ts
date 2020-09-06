import { DetalhesService } from './detalhes/detalhes.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesComponent } from './detalhes/detalhes.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DetalhesComponent],
  exports:[
    DetalhesComponent
  ],
  providers:[
    DetalhesService
  ]
})

export class CursoModule { }
