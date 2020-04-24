import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {JwtService} from '../services/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private jwtService: JwtService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    if (!this.jwtService.isLogged()) {
      return false;
    } else if (this.jwtService.getRole() == 'ROLE_ADMIN') {
      return true;
    }
    return false;
  }

}
