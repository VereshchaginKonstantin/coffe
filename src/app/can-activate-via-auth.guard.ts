import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './common/authentication.service'

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthenticationService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn()) {
      console.log('isLoggedIn true');
      // logged in so return true
      return true;
    }
    console.log('isLoggedIn false');
    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }
}
