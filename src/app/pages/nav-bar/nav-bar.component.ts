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
    this.navigateToPage("/login");
  }

  // TODO replace it with Observable
  isUserLoggedIn(){
    return this.usersService.isUserLoggedIn();
  }

  getUserEmail(){
    return this.usersService.getUserEmail();
  }

  navigateToPage(path: string){
    this.router.navigate([path]);
    this.isMenuOpen = false;
  }
}
