import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from 'src/modules/auth/auth.module';
import { LandingComponent } from '../../modules/landing/landing.component';

const routes: Routes = [
  { 
    path: '',
    loadChildren: () => import('src/modules/landing/landing.module')
      .then( m => m.LandingModule)
  },
  { 
    path: 'auth',
    loadChildren: () => import('src/modules/auth/auth.module')
      .then( m => m.AuthModule)
  },
  { 
    path: 'aboutus',
    loadChildren: () => import('src/modules/aboutUs/aboutus.module')
      .then( m => m.AboutUsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingLayoutRoutingModule { }
