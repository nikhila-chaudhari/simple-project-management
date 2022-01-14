import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/modules/dashboard/dashboard/dashboard.component';
import { MembersListComponent } from 'src/modules/members/members-list/members-list.component';
import { ProjectsListComponent } from 'src/modules/projects/projects-list/projects-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'projects', component: ProjectsListComponent },
  { path: 'members', component: MembersListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
