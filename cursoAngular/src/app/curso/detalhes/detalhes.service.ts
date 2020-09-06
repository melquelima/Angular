import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetalhesService {

  constructor() {
  }
  getDetalhes(){
    return ["A","B","C"]
  }
}
