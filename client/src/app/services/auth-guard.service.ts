import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './authservice';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('Authguard: ' + this.authService.getIsLoggedIn());
    if (this.authService.getIsLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }

  }

}
