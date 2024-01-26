import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/template/nav/nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './components/template/header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import { mdiInstagram } from '@mdi/js';
import { IconComponent } from './components/icon/icon.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { EspecialidadesComponent } from './components/template/especialidades/especialidades.component';
import { SobreComponent } from './components/template/sobre/sobre.component';
import { CarrouselComponent } from './components/template/carrousel/carrousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    IconComponent,
    FooterComponent,
    EspecialidadesComponent,
    SobreComponent,
    CarrouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
