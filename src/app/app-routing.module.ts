import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewQuarantineeComponent } from './new-quarantinee/new-quarantinee.component';
import { ViewQuarantineesComponent } from './view-quarantinees/view-quarantinees.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/:id', component: DashboardComponent },
  { path: 'addquarantinee', component: NewQuarantineeComponent },
  { path: 'viewquarantinees', component: ViewQuarantineesComponent },
  { path: '**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, DashboardComponent, PageNotFoundComponent, NewQuarantineeComponent, ViewQuarantineesComponent]
