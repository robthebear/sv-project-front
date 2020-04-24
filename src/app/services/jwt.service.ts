import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FeedbackService} from './feedback.service';
import * as jwt_decode from 'jwt-decode';
import {environment} from '../../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {Habilitation, Role} from '../models/data.model';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private httpClient: HttpClient, private feedbackService: FeedbackService,     private router: Router,
  ) { }

  private static userFromToken(token: string): Habilitation {
    const decodedToken = jwt_decode(token);

    const id = decodedToken.sub;
    const roles = decodedToken.auth.map(authority => {
      return {label: authority.authority};
    });

    return {id, role: roles[0]};
  }

  isLogged(): boolean {
    return Boolean(JwtService.getToken);
  }

  getId(): string {
    if (this.isLogged()) {
      return JwtService.userFromToken(JwtService.getToken()).id;
    }
    return undefined;
  }
  getRole(): string {
    if (this.isLogged()) {
      return JwtService.userFromToken(JwtService.getToken()).role.label;

      // tslint:disable-next-line:align
    } return undefined;
  }

  login(id: string, password: string) {
    const user = {id, motDePasse: password};

    return this.httpClient.post<{access_token: string}>(`${environment.apiUrl}/habilitation/sign-in`, user).pipe(
      tap(res => {
        JwtService.setToken(res.access_token);
        this.feedbackService.info.next(`${id} connected`);
        this.router.navigate(['/recherche']);
      }),
      catchError(this.feedbackService.handleError<{access_token: string }>('login'))
    );
  }

  logout(){
    if (this.isLogged()) {
      this.feedbackService.info.next(`${this.getId()} disconnected`);
      JwtService.clearToken();
    }
  }

  private static getToken(): string {
    return localStorage.getItem('access_token');
  }
  private static setToken(token: string) {
    localStorage.setItem('access_token', token);
  }
  private static clearToken() {
    localStorage.removeItem('access_token');
    }


}
