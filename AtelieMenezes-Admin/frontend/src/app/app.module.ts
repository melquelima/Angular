import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseAuthComponent } from './views/Authentication/base-auth/base-auth.component';
import { LoginComponent } from './views/Authentication/login/login.component';
import { MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {FormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BaseAppComponent } from './views/App/base-app/base-app.component';
import { HomeComponent } from './views/App/home/home.component';
import { NavComponent } from './components/template/nav/nav.component'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { EspecialidadesComponent } from './views/App/especialidades/especialidades.component';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { PortfolioComponent } from './views/App/portfolio/portfolio.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BaseSelecaoComponent } from './views/Selecao/base-selecao/base-selecao.component';
import { HomeSelecaoComponent } from './views/Selecao/home-selecao/home-selecao.component';
import { HeaderSelecaoComponent } from './components/selecao/header-selecao/header-selecao.component';
import { LoginSelecaoComponent } from './views/Selecao/login-selecao/login-selecao.component';
import { AlbNotFountComponent } from './views/Selecao/alb-not-fount/alb-not-fount.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarrouselComponent } from './components/selecao/carrousel/carrousel.component';
import { SelecaoImageComponent } from './components/selecao/selecao-image/selecao-image.component';
import { CheckedPipe } from './components/pipes/checked.pipe';
import { BaseAlbumComponent } from './views/App/albuns/base-album/base-album.component';
import { AlbumHomeComponent } from './views/App/albuns/album-home/album-home.component';
import { AlbumAddComponent } from './views/App/albuns/album-add/album-add.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { EspImageComponent } from './components/dialog-confirm/esp-image/esp-image.component';
import { PortImageComponent } from './components/App/port-image/port-image.component';
import { AlbumEditComponent } from './views/App/albuns/album-edit/album-edit.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AlbumComponent } from './components/App/albuns/album/album.component';

// import { MatFileUploadModule,MatFileUploadQueueComponent } from 'angular-material-fileupload';

@NgModule({
  declarations: [
    AppComponent,
    BaseAuthComponent,
    LoginComponent,
    BaseAppComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    EspecialidadesComponent,
    EspImageComponent,
    DialogConfirmComponent,
    PortfolioComponent,
    PortImageComponent,
    BaseSelecaoComponent,
    HomeSelecaoComponent,
    HeaderSelecaoComponent,
    LoginSelecaoComponent,
    AlbNotFountComponent,
    LogoutComponent,
    CarrouselComponent,
    SelecaoImageComponent,
    CheckedPipe,
    AlbumComponent,
    BaseAlbumComponent,
    AlbumHomeComponent,
    AlbumAddComponent,
    AlbumEditComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatDialogModule,
    MatTabsModule,
    MatCheckboxModule,
    NgbModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
