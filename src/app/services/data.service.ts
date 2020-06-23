import {Injectable, Input} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {Observable} from 'rxjs';
import {Application, Correspondant, Habilitation, Resultats, SvErreur, SvSuivi, WebService} from '../models/data.model';
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

  getCorrespondant(): Observable<Correspondant[]> {
    return this.http.get<Correspondant[]>(environment.apiUrl + '/correspondant');
  }
  postApplication(application: Application): Observable<Application> {
    return this.http.post<Application>(environment.apiUrl + '/application/', application);
  }
  suppressionCorrespondant(id: string): Observable<Correspondant> {
    return  this.http.delete<Correspondant>( environment.apiUrl + '/correspondant/' + id);
  }

  getApplicationVide(): Observable<Application[]> {
    return this.http.get<Application[]>(environment.apiUrl + '/application/applicationAMettreAJour');
  }
  mettreAJourApplication(id: string, application: Application): Observable<Application> {
    return this.http.put<Application>(environment.apiUrl + '/application/mettreAjourApplication/' + id, application);
  }
    getCorrespondantById(id: string): Observable<Correspondant> {
    return this.http.get<Correspondant>(environment.apiUrl + '/correspondant/id/' + id);
  }
  getWebServiceByApp(app: string): Observable<WebService[]> {
    return this.http.get<WebService[]>( environment.apiUrl + '/webservice/parApp/' + app);
  }

  getSvSuiviByDate( web: string, dateD: string, dateF: string): Observable<SvSuivi[]> {
    return this.http.get<SvSuivi[]>(environment.apiUrl + '/svsuivi/parDate/' + dateD + '/' + dateF + '/' + web);
  }

  getSvErreurByDate( web: string, dateD: string, dateF: string): Observable<SvErreur[]> {
    return this.http.get<SvErreur[]>(environment.apiUrl + '/sverreur/parDate/' + dateD + '/' + dateF + '/' + web);
  }

  getResultat(app: string, web: number, dateD: string, dateF: string): Observable<Resultats[]> {
    return this.http.get<Resultats[]>(environment.apiUrl + '/resultat/' + app + '/' + web + '/' + dateD + '/' + dateF);
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
getRoleById(id: string): Observable<Habilitation> {
    return this.http.get<Habilitation>(environment.apiUrl + '/habilitation/role/' + id);
}

}
