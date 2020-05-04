import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {Observable} from 'rxjs';
import {Application, Correspondant, SvSuivi, WebService} from '../models/data.model';
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
  getCorrespondant(): Observable<Correspondant> {
    return this.http.get<Correspondant>(environment.apiUrl + '/correspondant');
  }
  getCorrespondantById(id: string): Observable<Correspondant> {
    return this.http.get<Correspondant>(environment.apiUrl + '/correspondant/id/' + id);
  }
  getWebServiceByApp(app: string): Observable<WebService> {
    return this.http.get<WebService>( environment.apiUrl + '/webservice/parApp/' + app);
  }

  getSvSuiviByDate( web: string, dateD: string, dateF: string): Observable<SvSuivi> {
    // if (web == '0') {
    //   web.replace('0', '');
    // }
    return this.http.get<SvSuivi>(environment.apiUrl + '/svsuivi/parDate/' + dateD + '/' + dateF + '/' + web);
  }
}
