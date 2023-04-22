import { BaseAuthComponent } from './views/Authentication/base-auth/base-auth.component';
import { CreateAccountComponent } from './views/Authentication/create-account/create-account.component';
import { AuthGuard } from './auth/auth.guard';
import { IndexComponent } from './views/App/index/index.component';
import { ProductUpdateComponent } from './views/App/product-update/product-update.component';
import { ProductReadComponent } from './views/App/product-read/product-read.component';
import { ProductCreateComponent } from './views/App/product-create/product-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/Authentication/login/login.component';
import { BaseAppComponent } from './views/App/base-app/base-app.component';


const routes: Routes = [
{
  path:'',
  component:BaseAppComponent,
  children:[
    {
      path:'',
      component:IndexComponent
    },
    {
      path:"products",
      component:ProductReadComponent
    },
    {
      path:"products/create",
      component:ProductCreateComponent
    },
    {
      path:"products/update/:id",
      component:ProductUpdateComponent
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
      path:"login",
      component:LoginComponent,
      pathMatch:"full"
    },
    {
      path:"createAccount",
      component:CreateAccountComponent,
      pathMatch:"full"
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
