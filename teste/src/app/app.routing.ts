import { PrincipalComponent } from './principal/principal.component';
import { PrincipalModule } from './principal/principal.module';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { Routes,RouterModule } from '@angular/router';
import {  NgModule } from '@angular/core';

const APP_ROUTES:Routes =[
    {path:'',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'home2',component:PrincipalComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }