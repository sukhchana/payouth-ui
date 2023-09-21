import { Injectable } from "@angular/core";
import { CanLoad, Route, UrlSegment, UrlTree } from "@angular/router";
import { CookieService } from "ngx-cookie";
import { Observable } from "rxjs";
import { UserNameCookieName } from "../models/cookie-names.model";

@Injectable({
  providedIn: 'root',
})
export class hasProvidedUserNameGuard implements CanLoad {
  constructor(private service: CookieService) {
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const userName = this.service.get(UserNameCookieName);
    if (userName && userName.length > 0) {
      console.log('has provided username guard ok');
      return true;
    } else {
      console.log('has provided username guard failed');
      return false;
    }
  }
}
