import { PrincipalRoutingModule } from './principal.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Pagina1Component } from './pages/pagina1/pagina1.component';
import { Pagina2Component } from './pages/pagina2/pagina2.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    Pagina1Component,
    Pagina2Component,
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    FormsModule,
    BrowserModule
  ]
})
export class PrincipalModule { }
