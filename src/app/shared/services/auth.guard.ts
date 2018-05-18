import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
/**
 * @author DineshRachumalla
 * @Date 18-05-2018
 * @desc Router guard, where it prevents user not reaching to any other navigation without login
 * It can be written with the help of anuglar router guards
 */
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, public router: Router) {}
  /**
   * @method canActivate Angular router guard
   * @param next  Router snapshot
   * @param state router state snapshot
   * @return {boolean}
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // get the value from auth service whether user is logged or not,
    // If not logged in then route him towards sign in
    // If logged pass the value so that i execute the further functinoality
    if (!this.authService.userLoggedIn) {
      this.router.navigate([""]);
    }
    return true;
  }
}
