import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { EmailCookieName } from '../models/cookie-names.model';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  targetApiUrl = "https://igwx8jmmyz.us-east-1.awsapprunner.com";

  constructor(private cookieService: CookieService, private http: HttpClient) { }

  registerUser(user: User){
    let body = JSON.stringify(user);
    console.log("body", body);
    this.executeJsonPost("/users", body).subscribe(res => {
      this.cookieService.set(EmailCookieName, user.email);
    });
  }

  setUserEmail(email: string) {
    this.cookieService.set(EmailCookieName, email);
  }

  executeJsonPost(action: string, body: any): Observable<any> {
    let url = this.targetApiUrl + action;
    let headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    return this.http.post(url, body, { headers: headers });
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
