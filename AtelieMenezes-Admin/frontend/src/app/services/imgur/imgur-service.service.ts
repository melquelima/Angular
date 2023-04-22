import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ImgurServiceService {
  
  baseUrl = ""

  constructor(private http: HttpClient) { 
    this.baseUrl = environment.backUrl + "/api/imgur/upload"
  }

  upload(file:File):Observable<any>{
    console.log(file)
    let formData:FormData = new FormData();
    formData.append('image', file,file.name);
    formData.append('album', 'vwM3YUg');
    
    const headers = new HttpHeaders()
    headers.append('Content-Type', 'multipart/form-data');

    let params = new HttpParams();
    const options = {
      headers: headers,
      params: params,
      reportProgress: true
    };

    //const req = new HttpRequest('POST', 'https://api.imgur.com/3/upload', formData, options);
    return this.http.post( this.baseUrl,formData,options);
  }

}


// token = '812c24ef455ea79f406e99c14cadfc214e767af9'
// constructor(private http: HttpClient) { }

// upload(file:File):Observable<any>{
//   console.log(file)
//   let formData:FormData = new FormData();
//   formData.append('image', file,file.name);
//   formData.append('album', 'vwM3YUg');
  
//   const headers = new HttpHeaders()

//   // headers.append('Content-Type', 'application/json');
//   headers.append('Content-Type', 'multipart/form-data');
//   headers.append('Authorization', 'Bearer 812c24ef455ea79f406e99c14cadfc214e767af9');

//   let params = new HttpParams();
//   const options = {
//     headers: headers,
//     params: params,
//     reportProgress: true
//   };

//   const req = new HttpRequest('POST', 'https://api.imgur.com/3/upload', formData, options);
//   return this.http.post( 'https://api.imgur.com/3/upload',formData,options);
// }
