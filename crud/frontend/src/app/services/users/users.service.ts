import { User } from './../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  baseUrl = 'http://localhost:3001/users'

  constructor(private http:HttpClient) { }

  create(user:User):Observable<User>{
    return this.http.post<User>(this.baseUrl,user)
  }

  getById(id:string):Observable<User>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<User>(url)
  }
  getByName(name:string):Observable<User[]>{
    const url = `${this.baseUrl}?name=${name}`
    return this.http.get<User[]>(url)
  }

  

}
