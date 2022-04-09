import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },{ 
    path: 'dashboard',
    loadChildren: () => import('src/modules/dashboard/dashboard-routing.module')
      .then( m => m.DashboardRoutingModule)
  },
  { 
    path: 'projects',
    loadChildren: () => import('src/modules/projects/projects-routing.module')
      .then( m => m.ProjectsRoutingModule)
  },
  { 
    path: 'members',
    loadChildren: () => import('src/modules/members/members-routing.module')
      .then( m => m.MembersRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
