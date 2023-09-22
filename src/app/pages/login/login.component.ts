import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = "";

  constructor(private usersService: UsersService, private router: Router) { }

  loginUser(){
    if(this.isEmailValid()){
      this.usersService.setUserEmail(this.email);
      this.router.navigate(['/']);
    }
  }

  navigateToRegistrationPage(){
    this.router.navigate(['/register']);
  }

  isEmailValid(): boolean{
    return this.email != "";
  }
}
