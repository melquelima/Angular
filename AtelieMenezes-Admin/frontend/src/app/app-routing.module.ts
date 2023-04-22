import { NotFoundComponent } from './components/not-found/not-found.component';
import { AlbumEditComponent } from './views/App/albuns/album-edit/album-edit.component';
import { AlbumAddComponent } from './views/App/albuns/album-add/album-add.component';
import { AlbumHomeComponent } from './views/App/albuns/album-home/album-home.component';
import { BaseAlbumComponent } from './views/App/albuns/base-album/base-album.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginSelecaoComponent } from './views/Selecao/login-selecao/login-selecao.component';
import { HomeSelecaoComponent } from './views/Selecao/home-selecao/home-selecao.component';
import { BaseSelecaoComponent } from './views/Selecao/base-selecao/base-selecao.component';
import { PortfolioComponent } from './views/App/portfolio/portfolio.component';
import { EspecialidadesComponent } from './views/App/especialidades/especialidades.component';
import { HomeComponent } from './views/App/home/home.component';
import { LoginComponent } from './views/Authentication/login/login.component';
import { BaseAuthComponent } from './views/Authentication/base-auth/base-auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseAppComponent } from './views/App/base-app/base-app.component';
import { AuthGuard } from './guard/auth.guard';
import { SelecaoGuard } from './guard/selecao.guard';
import { AlbNotFountComponent } from './views/Selecao/alb-not-fount/alb-not-fount.component';
import { SelecaoExistsGuard } from './guard/selecao-exists.guard';

const routes: Routes = [
  {
    path:'',
    component:BaseAppComponent,
    children:[
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'especialidades',
        component:EspecialidadesComponent
      },
      {
        path:'portfolio',
        component:PortfolioComponent
      },
      {
        path:'albuns',
        component:BaseAlbumComponent,
        children:[
          {
            path:'',
            component:AlbumHomeComponent
          },
          {
            path:'add',
            component:AlbumAddComponent
          },
          {
            path:':alb/edit',
            component:AlbumEditComponent
          },
          {
            path:'notfound',
            component:NotFoundComponent
          }
        ]
      }
    ],
    canActivate:[AuthGuard]
  },
  {
    path:'',
    component:BaseAuthComponent,
    children:[
      {
        path:'',
        redirectTo:"login",
        pathMatch:"full"
      }, 
      {
        path:'login',
        component:LoginComponent,
        pathMatch:"full"
      }
    ]
  },
  {
    path:'selecao',
    component:BaseSelecaoComponent,
    children:[
      {
        path:'', //REDIRECIONAR PARA NOT FOUND
        redirectTo:"notfound",
        pathMatch:"full"
      },
      {
        path:'notfound',
        component:AlbNotFountComponent
      },
      {
        path:':alb',
        component:HomeSelecaoComponent,
        canActivate:[SelecaoExistsGuard,SelecaoGuard]
      },
      {
        path:':alb/login',
        component:LoginSelecaoComponent
      }
    ]
  },
  {
    path:'logout',
    component:LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
