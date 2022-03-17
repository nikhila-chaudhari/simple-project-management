import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from 'src/layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard',
  },
  { 
    path: '',
    component: MainLayoutComponent,
    loadChildren: () => import('src/layouts/main-layout/main-layout.module')
      .then( m => m.MainLayoutModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
