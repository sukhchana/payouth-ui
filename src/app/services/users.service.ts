import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { EmailCookieName } from '../models/cookie-names.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private cookieService: CookieService) { }

  setUserEmail(email: string) {
    this.cookieService.set(EmailCookieName, email);
  }

  getUserEmail() {
    return this.cookieService.get(EmailCookieName);
  }

  isUserLoggedIn(): boolean {
    return this.getUserEmail() != "";
  }

  logout(){
    this.cookieService.delete(EmailCookieName);
  }
}
