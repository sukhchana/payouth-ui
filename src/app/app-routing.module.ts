import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { hasProvidedUserNameGuard } from './guards/has-provided-user-name-guard';
import { CandidatesOverviewComponent } from './pages/candidates-overview/candidates-overview.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { IsUserLoggedInGuard } from './guards/is-user-logged-in.guard';
import { LoginComponent } from './pages/login/login.component';
import { HowToVotePageComponent } from './pages/how-to-vote-page/how-to-vote-page.component';
import { CandidateDetailsComponent } from './pages/candidate-details/candidate-details.component';
import { PollingStationsComponent } from './pages/polling-stations/polling-stations.component';
import { VoterRegistrationsComponent } from './pages/voter-registrations/voter-registrations.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(module => module.HomeModule),
    canActivate: [IsUserLoggedInGuard]
    //canLoad: [hasProvidedUserNameGuard]
  },
  {
    path: 'candidates', 
    component: CandidatesOverviewComponent,
    canActivate: [IsUserLoggedInGuard] 
  },
  {
    path: 'candidate-details/:id', 
    component: CandidateDetailsComponent,
    canActivate: [IsUserLoggedInGuard] 
  },
  {
    path: 'register', 
    component: RegistrationComponent 
  },
  {
    path: 'login', 
    component: LoginComponent 
  },
  {
    path: 'how-to-vote', 
    component: HowToVotePageComponent,
    canActivate: [IsUserLoggedInGuard]  
  },
  {
    path: 'polling-stations', 
    component: PollingStationsComponent,
    canActivate: [IsUserLoggedInGuard]  
  },
  {
    path: 'voter-registrations', 
    component: VoterRegistrationsComponent,
    canActivate: [IsUserLoggedInGuard]  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
