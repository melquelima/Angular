import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeContentRoutingModule } from './home-content-routing.module';
import { HomeContentComponent } from './home-content.component';


@NgModule({
  declarations: [HomeContentComponent],
  imports: [
    CommonModule,
    HomeContentRoutingModule
  ]
})
export class HomeContentModule { }
