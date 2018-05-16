import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from "rxjs/Observable";
import {AuthService} from "./authservice";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //if (this.authService.getIsLoggedIn()) {
    if (true) {
      //console.log(this.authService.isLoggedIn);
      return true;
    }
    /*this.router.navigate(['/home']);
    return false;*/
  }
}
