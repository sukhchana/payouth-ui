import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CookieModule } from 'ngx-cookie';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CandidatesOverviewComponent } from './pages/candidates-overview/candidates-overview.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from './pages/login/login.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { HowToVotePageComponent } from './pages/how-to-vote-page/how-to-vote-page.component';
import { CandidateDetailsComponent } from './pages/candidate-details/candidate-details.component'; 
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

import { PollingStationsComponent } from './pages/polling-stations/polling-stations.component';
import { VoterRegistrationsComponent } from './pages/voter-registrations/voter-registrations.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatesOverviewComponent,
    RegistrationComponent,
    LoginComponent,
    NavBarComponent,
    HowToVotePageComponent,
    CandidateDetailsComponent,
    PollingStationsComponent,
    VoterRegistrationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CookieModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule, 
    MatListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
