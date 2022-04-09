import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingLayoutRoutingModule } from './landing-layout-routing.module';
import { LandingLayoutComponent } from './landing-layout.component';
import { RouterModule } from '@angular/router';
import { NavigationModule } from 'src/modules/navigation/navigation.module';
import { MaterialModule } from 'src/material.module';

@NgModule({
  declarations: [
    LandingLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LandingLayoutRoutingModule,
    NavigationModule,
    MaterialModule
  ]
})
export class LandingLayoutModule { }
