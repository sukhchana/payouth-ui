import { Component } from '@angular/core';
import { FormControl, Validators,NgForm,FormGroupDirective } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  password: string = "";
  repassword: string = "";
  genders: string[] = ["Male", "Female", "Other", "I don't want disclosure this information"];
  races: string[] = ["Black or African American", "White", "Asian", "American Indian or Alaska Native", "Native Hawaiian or Other Pacific Islander", "I don't want disclosure this information"];
  counties: string[] = ["Adams County", "Allegheny County", "Armstrong County", "Beaver County", "I don't want disclosure this information"];
  birthDate: any = "";
  selectedGender: any = "";
  selectedRace: any = "";
  selectedCounty: any = "";
  firstName: any = "";
  lastName: any = "";

  constructor(private usersService: UsersService, private router: Router) { }

  registerUser(){
    if(this.registrationForm.valid){
      let user = {
        email: this.registrationForm.value+"",
        county: this.selectedCounty,
        race: this.selectedRace,
        gender: this.selectedGender.toLowerCase(),
        firstName: this.firstName,
        lastName: this.lastName      
      } as User;

      if(this.birthDate != ""){
        user.dateOfBirth = this.formatDateShort(this.birthDate);
      }

      this.usersService.registerUser(user);
      // navigate to main page
      this.router.navigate(['/']);
    }
  }

  formatDateShort(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0'); 
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = String(date.getFullYear()); 
  
    return `${month}/${day}/${year}`;
  }

  registrationForm = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  isFormInvalid(): boolean{
    return !this.registrationForm.valid;
  }

  navigateToLoginPage(){
    this.router.navigate(['/login']);
  }
}
