import {Injectable, Input} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {Observable} from 'rxjs';
import {Application, Correspondant, SvErreur, SvSuivi, WebService} from '../models/data.model';
import {environment} from '../../environments/environment';
import {FeedbackService} from './feedback.service';
import {catchError, tap} from 'rxjs/operators';


const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient, private feedbackService: FeedbackService) {
  }
  getCorrespondants(): Observable<Correspondant[]> {
    const params = new HttpParams();
    return this.http.get<Correspondant[]>(`${environment.apiUrl}/correspondant`, {params, headers}).pipe(
      tap(_ => console.log('fetched users')),
      catchError(this.feedbackService.handleError<Correspondant[]>('getCorrespondants', []))
    );
  }

  getSuivi(): Observable<SvSuivi[]> {
    return this.http.get<SvSuivi[]>(environment.apiUrl + '/svsuivi');
  }

  getApplication(): Observable<Application[]> {
    return this.http.get<Application[]>(environment.apiUrl + '/application');
  }
  getWebService(): Observable<WebService[]> {
    return this.http.get<WebService[]>(environment.apiUrl + '/webservice');
  }
  getCorrespondant(): Observable<Correspondant[]> {
    return this.http.get<Correspondant[]>(environment.apiUrl + '/correspondant');
  }
  getApplicationVide(): Observable<Application> {
    return this.http.get<Application>(environment.apiUrl + '/application/applicationAMettreAJour');
  }
  mettreAJourApplication(id: string, application: Application): Observable<Application> {
    return this.http.put<Application>(environment.apiUrl + '/mettreAjourApplication/' + id, application);
  }
    getCorrespondantById(id: string): Observable<Correspondant> {
    return this.http.get<Correspondant>(environment.apiUrl + '/correspondant/id/' + id);
  }
  getWebServiceByApp(app: string): Observable<WebService[]> {
    return this.http.get<WebService[]>( environment.apiUrl + '/webservice/parApp/' + app);
  }

  getSvSuiviByDate( web: string, dateD: string, dateF: string): Observable<SvSuivi[]> {
    // if (web == '0') {
    //   web.replace('0', '');
    // }
    return this.http.get<SvSuivi[]>(environment.apiUrl + '/svsuivi/parDate/' + dateD + '/' + dateF + '/' + web);
  }

  getSvErreurByDate( web: string, dateD: string, dateF: string): Observable<SvErreur[]> {
    return this.http.get<SvErreur[]>(environment.apiUrl + '/sverreur/parDate/' + dateD + '/' + dateF + '/' + web);
  }

  getWebServiceParId(id: number): Observable<WebService> {
    return this.http.get<WebService>(environment.apiUrl + '/webservice/' + id);
  }
  getApplicationFiltre(id: string): Observable<Application[]> {
    return this.http.get<Application[]>(environment.apiUrl + '/application/filtre/' + id);
  }

  updateCorrespondant(id: string, correspondant: { applications: Application[] }): Observable<Correspondant> {
    return this.http.put<Correspondant>(environment.apiUrl + '/correspondant/update/' + id, correspondant);
  }


}
