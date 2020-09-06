import { DetalhesService } from './detalhes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  teste:string[]

  constructor(private servico:DetalhesService) {
    this.teste = this.servico.getDetalhes()
   }

  ngOnInit(): void {
  }

}
