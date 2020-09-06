import { Pagina2Component } from './pages/pagina2/pagina2.component';
import { Pagina1Component } from './pages/pagina1/pagina1.component';
import { Routes,RouterModule } from '@angular/router';
import {  NgModule } from '@angular/core';


const APP_ROUTES:Routes =[
    {path:'',component:Pagina1Component},
    {path:'login',component:Pagina2Component}
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
  })
  export class PrincipalRoutingModule { }