import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(private usersService: UsersService, private router: Router) { }

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout(){
    this.usersService.logout();
    this.router.navigate(["/login"]);
    this.isMenuOpen = false;
  }

  // TODO replace it with Observable
  isUserLoggedIn(){
    return this.usersService.isUserLoggedIn();
  }

  getUserEmail(){
    return this.usersService.getUserEmail();
  }
}
