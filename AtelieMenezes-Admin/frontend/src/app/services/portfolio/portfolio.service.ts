import { PortPic } from './../../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Portfolio } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  
  baseUrl = ""

  constructor(private http: HttpClient) { 
    this.baseUrl = environment.backUrl + "/api/portfolios"
  }

  getPortfolios():Observable<Portfolio[]>{
    return this.http.get<Portfolio[]>(this.baseUrl)
  }

  portAddEmptyImage(id_port:number):Observable<any>{
    const url = `${this.baseUrl}/${id_port}`
    return this.http.post(url,"",{responseType: 'text'})
  }

  portDelImage(id_port:number,id_image:number):Observable<any>{
    const url = `${this.baseUrl}/${id_port}/image/${id_image}`
    return this.http.delete(url,{responseType: 'text'})
  }

  toLeft(id_port:number,order_pic:number):Observable<any>{
    const url = `${this.baseUrl}/${id_port}/orderLeft/${order_pic}`
    return this.http.put(url,"",{responseType: 'text'})
  }

  toRight(id_port:number,order_pic:number):Observable<any>{
    const url = `${this.baseUrl}/${id_port}/orderRight/${order_pic}`
    return this.http.put(url,"",{responseType: 'text'})
  }

  updateDesc(id_port:number,desc:string):Observable<any>{
    const url = `${this.baseUrl}/${id_port}/descricao`
    return this.http.put(url,desc,{responseType: 'text'})
  }


  updateImage(file:File,id_port:number,id_image:number):Observable<PortPic>{
    const url = `${this.baseUrl}/${id_port}/image/${id_image}`
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
    return this.http.put<PortPic>(url,formData,options);
  }
  

  
}
