import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from 'src/material.module';



@NgModule({
  declarations: [
    ProjectsListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ProjectsModule { }
