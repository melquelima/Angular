import { Especialidade } from './../../models/user.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  baseUrl = ""

  constructor(private http: HttpClient) { 
    this.baseUrl = environment.backUrl + "/api/especialidades"
  }

  getAll():Observable<Especialidade[]>{
    return this.http.get<Especialidade[]>(this.baseUrl)
  }

  update(especialdiade:Especialidade):Observable<Especialidade>{
    const url = `${this.baseUrl}/${especialdiade.id}`
    return this.http.put<Especialidade>(url,especialdiade)
  }

  add():Observable<Especialidade>{
    return this.http.post<Especialidade>(this.baseUrl,"")
  }

  delete(especialdiade:Especialidade):Observable<Especialidade>{
    const url = `${this.baseUrl}/${especialdiade.id}`
    return this.http.delete<Especialidade>(url)
  }

  updateImage(file:File,id:number):Observable<Especialidade>{
    const url = `${this.baseUrl}/${id}/image`
    let formData:FormData = new FormData();
    formData.append('image', file,file.name);
    
    const headers = new HttpHeaders()
    headers.append('Content-Type', 'multipart/form-data');

    let params = new HttpParams();
    const options = {
      headers: headers,
      params: params,
      reportProgress: true
    };

    //const req = new HttpRequest('POST', 'https://api.imgur.com/3/upload', formData, options);
    return this.http.put<Especialidade>(url,formData,options);
  }


}
