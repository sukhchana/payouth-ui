import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { hasProvidedUserNameGuard } from './guards/has-provided-user-name-guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(module => module.HomeModule),
    //canLoad: [hasProvidedUserNameGuard]
  },
  {
    path: 'candidates',
    loadChildren: () => import('./pages/candidates-overview/candidates-overview.module').then(module => module.CandidatesOverviewModule),
    //canLoad: [hasProvidedUserNameGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
