import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule } from '@angular/router';
import { NavigationModule } from 'src/modules/navigation/navigation.module';
import { MaterialModule } from 'src/material.module';

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainLayoutRoutingModule,
    NavigationModule,
    MaterialModule
  ]
})
export class MainLayoutModule { }
