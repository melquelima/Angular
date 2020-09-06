import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';


const routes: Routes = [
  {
    path:'lazy',
    loadChildren:()=> import('./modules/home-content/home-content.module').then(
      m=> m.HomeContentModule
    )
  },
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'login',
    component:PageLoginComponent,
  },
  { path: 'homeContent', loadChildren: () => import('./modules/home-content/home-content.module').then(m => m.HomeContentModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
