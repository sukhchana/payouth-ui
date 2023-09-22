import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class IsUserLoggedInGuard implements CanActivate {

  constructor(private usersService: UsersService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
     if(this.usersService.isUserLoggedIn()){
      return true;
     }
     else{
      this.router.navigate(['/login']);
      return false;
     };
  }
}