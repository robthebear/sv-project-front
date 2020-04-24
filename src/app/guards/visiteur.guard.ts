import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {JwtService} from '../services/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class VisiteurGuard implements CanActivate {
  constructor(private router: Router, private jwtService: JwtService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
  }
}
