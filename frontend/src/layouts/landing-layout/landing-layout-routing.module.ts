import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../../modules/landing/landing.component';

const routes: Routes = [
  { 
    path: '',
    component: LandingComponent,
    loadChildren: () => import('src/modules/landing/landing.module')
      .then( m => m.LandingModule)
  },
  { 
    path: 'auth',
    loadChildren: () => import('src/modules/auth/auth-routing.module')
      .then( m => m.AuthRoutingModule)
  },
  { 
    path: 'aboutus',
    loadChildren: () => import('src/modules/aboutUs/aboutus-routing.module')
      .then( m => m.AboutUsRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingLayoutRoutingModule { }
