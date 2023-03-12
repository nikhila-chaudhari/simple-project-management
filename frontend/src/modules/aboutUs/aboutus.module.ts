import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './aboutus-routing.module';
import { AboutUsComponent } from './aboutus.component';
import { MaterialModule } from 'src/material.module';



@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    MaterialModule
  ]
})
export class AboutUsModule { }
