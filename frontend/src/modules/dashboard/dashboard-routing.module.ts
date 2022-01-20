/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


/* Module */
import { DashboardModule } from './dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: DashboardComponent,
    }
];

@NgModule({
    imports: [DashboardModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}
