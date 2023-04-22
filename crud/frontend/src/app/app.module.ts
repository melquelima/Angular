import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { ProductCreateComponent } from './views/App/product-create/product-create.component';
import { ProductReadComponent } from './views/App/product-read/product-read.component';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import { MatButtonModule } from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {FormsModule} from '@angular/forms';
import { TableReadComponent } from './components/products/table-read/table-read.component';
import { TableComponent } from './components/schematics/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProductUpdateComponent } from './views/App/product-update/product-update.component'
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogConfirmComponent } from './components/dialog/dialog-confirm/dialog-confirm.component';
import { IndexComponent } from './views/App/index/index.component';
import { LoginComponent } from './views/Authentication/login/login.component';
import { MatTabsModule} from '@angular/material/tabs';
import { CreateAccountComponent } from './views/Authentication/create-account/create-account.component'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BaseAppComponent } from './views/App/base-app/base-app.component';
import { BaseAuthComponent } from './views/Authentication/base-auth/base-auth.component';
import { UrlStaticDirective } from './directives/url-static.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BaseAppComponent,
    ProductCreateComponent,
    ProductReadComponent,
    TableReadComponent,
    TableComponent,
    ProductUpdateComponent,
    DialogConfirmComponent,
    IndexComponent,
    LoginComponent,
    BaseAuthComponent,
    CreateAccountComponent,
    BaseAppComponent,
    BaseAuthComponent,
    UrlStaticDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
