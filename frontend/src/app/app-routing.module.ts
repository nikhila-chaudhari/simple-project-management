import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingLayoutComponent } from 'src/layouts/landing-layout/landing-layout.component';
import { MainLayoutComponent } from 'src/layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/landing',
  },
  { 
    path: 'admin',
    component: MainLayoutComponent,
    loadChildren: () => import('src/layouts/main-layout/main-layout.module')
      .then( m => m.MainLayoutModule)
  },
  { 
    path: 'landing',
    component: LandingLayoutComponent,
    loadChildren: () => import('src/layouts/landing-layout/landing-layout.module')
      .then( m => m.LandingLayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
