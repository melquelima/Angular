import { picAlbum } from './../../models/user.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { Album } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SelecaoService {

  baseUrl = ""

  constructor(private http: HttpClient) {
    this.baseUrl = environment.backUrl + "/api/selecao"
   }

  getAlbum(album:string):Observable<Album>{
    const url = `${this.baseUrl}/album/${album}`
    return this.http.get<Album>(url)
  }

  getAlbums():Observable<Album[]>{
    const url = `${this.baseUrl}/albums`
    return this.http.get<Album[]>(url)
  }

  checkImage(id_album:number,id_image:number,val:boolean):Observable<string>{
    const url = `${this.baseUrl}/album/${id_album}/image/${id_image}/checkImage/${val?1:0}`
    return this.http.post(url,"",{responseType: 'text'})
  }

  newAlbum(album:string,senha:string,capa:string,files:FileList):Observable<string>{
    const url = `${this.baseUrl}/album`

    let formData:FormData = new FormData();
    for(var i=0;i<files.length;i++){
      formData.append('images', files[i],files[i].name);
    }
    formData.append('album', album);
    formData.append('capa', capa);
    formData.append('senha', senha);
    
    const headers = new HttpHeaders()
    headers.append('Content-Type', 'multipart/form-data');

    let params = new HttpParams();
    const options = {
      headers: headers,
      params: params,
      reportProgress: true,
      responseType: 'text'
    };


    return this.http.post(url,formData,{
      headers: headers,
      params: params,
      reportProgress: true,
      responseType: 'text'
    })
  }


  progress(id:string):Observable<any>{
    const url = `${this.baseUrl}/progress/${id}`
    return this.http.get(url)
  }

  deleteAlbum(nome:string):Observable<any>{
    const url = `${this.baseUrl}/album/${nome}`
    return this.http.delete(url,{responseType: 'text'})
  }

  selecteds(nome:string):Observable<picAlbum[]>{
    const url = `${this.baseUrl}/album/${nome}/selecteds`
    return this.http.get<picAlbum[]>(url)
  }

  
}
