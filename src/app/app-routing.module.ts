import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { hasProvidedUserNameGuard } from './guards/has-provided-user-name-guard';
import { CandidatesOverviewComponent } from './pages/candidates-overview/candidates-overview.component';
import { RegistrationComponent } from './pages/registration/registration.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(module => module.HomeModule),
    //canLoad: [hasProvidedUserNameGuard]
  },
  {
    path: 'candidates', 
    component: CandidatesOverviewComponent 
  },
  {
    path: 'register', 
    component: RegistrationComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
