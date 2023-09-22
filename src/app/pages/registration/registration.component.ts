import { Component } from '@angular/core';
import { FormControl, Validators,NgForm,FormGroupDirective } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';

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

  constructor(private usersService: UsersService, private router: Router) { }

  registerUser(){
    if(this.registrationForm.valid){
      this.usersService.setUserEmail(this.registrationForm.value+"");
      // navigate to main page
      this.router.navigate(['/']);
    }
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
