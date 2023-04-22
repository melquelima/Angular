import { Variavel } from './../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VarService {

  baseUrl = ""

  constructor(private http: HttpClient) { 
    this.baseUrl = environment.backUrl + "/api/variaveis"
  }

  getVar(varName:string):Observable<Variavel>{
    return this.http.get<Variavel>( `${this.baseUrl}/${varName}`)
  }

  updateVar(vr:Variavel):Observable<Variavel>{
    return this.http.put<Variavel>(`${this.baseUrl}/${vr.name}`,vr)
  } 

}
