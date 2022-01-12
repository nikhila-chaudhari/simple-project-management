import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MaterialModule } from 'src/material.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NavigationService } from './services/navigation.service';



@NgModule({
  declarations: [
    TopNavComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    TopNavComponent,
    SideNavComponent
  ],
  providers: [
    NavigationService
  ]
})
export class NavigationModule { }
