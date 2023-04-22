import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private route:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ){
      const token = window.localStorage.getItem('token')
      if(token){
        console.log("TEM TOKEN")
        return true;
      }else{
        console.log("NAO TEM TOKEN")
        this.route.navigate(['login'])
        return false
      }
  }
  
}
