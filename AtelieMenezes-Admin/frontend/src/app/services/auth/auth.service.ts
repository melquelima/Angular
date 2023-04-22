import { Auth,User } from './../../models/user.model';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  baseUrl = ''

  

  constructor(private http:HttpClient) {
    this.baseUrl = environment.backUrl + "/api"
    
   }

  login(user:User):Observable<Auth>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(user.userName + ":" + user.password)
      })
    };
    return this.http.get<Auth>(this.baseUrl + "/login",httpOptions)
  }

  isAuthenticated(token:string):Observable<any>{
    return this.http.get<any>(this.baseUrl + "/isAuthenticated/" + token)
  }


  loginAlbum(nome_album:string,password:string):Observable<Auth>{
    const url = `${this.baseUrl}/selecao/album/${nome_album}/login`
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa("NOUSERNAME:" + password)
      })
    };
    return this.http.get<Auth>(url,httpOptions)
  }

  isAuthenticatedAlbum(nome_album:string,token:string):Observable<any>{
    const url = `${this.baseUrl}/selecao/album/${nome_album}/isAuthenticated/${token}`
    return this.http.get<any>(url)
  }


}
