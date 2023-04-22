import { AuthService } from './../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map} from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router:Router,
    private AuthService:AuthService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean>{
      const token = window.localStorage.getItem('token')
      if(token){
        return this.AuthService.isAuthenticated(token).pipe(map(e => {
          if(e.status){
            return true
          }else{
            this.router.navigate(['/login'])
            return false
          }
        }),
        catchError((err) => {
          this.router.navigate(['/login']);
          return of(false);
        })
      );
      }else{
        this.router.navigate(['/login'])
        return false;
      }
  }
  
}
