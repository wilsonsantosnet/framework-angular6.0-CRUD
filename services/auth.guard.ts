
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
//import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(public authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        return this.authService.IsAuthApiVerify().pipe(map((response) => {
            if (response.status == 401 || response.status == 403) {
                this.router.navigate(["/login"]);
                return false;
            }
            return true;
        }));
   }

}
