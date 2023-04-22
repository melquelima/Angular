import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SelecaoService } from '../services/selecao/selecao.service';
import { Observable } from 'rxjs';
import { catchError, map} from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SelecaoGuard implements CanActivate {

  constructor(
    private router:Router,
    private selecaoService:SelecaoService,
    private authService:AuthService
  ){}

  // RETORNA SE O ALBUM EXISTE CASO CONTRARIO ENVIA PARA O NOTFOUND
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean | Observable<boolean>{
    const alb = route.paramMap.get('alb')
    const token = window.localStorage.getItem('token')

    if(token && alb){
      return this.authService.isAuthenticatedAlbum(alb,token).pipe(map(e => {
        if(e.status){
          return true
        }else{
          this.router.navigate([`/selecao/${alb}/login`])
          return false
        }
      }),
      catchError((err) => {
        this.router.navigate([`/selecao/${alb}/login`])
        return of(false);
      }))
    }else{
      this.router.navigate([`/selecao/${alb}/login`])
      return false
    }
  }
  
}
